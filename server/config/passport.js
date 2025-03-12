const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const googleConfig = require('./google');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(new GoogleStrategy({
  clientID: googleConfig.clientID,
  clientSecret: googleConfig.clientSecret,
  callbackURL: googleConfig.callbackURL,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if user already exists
    let user = await User.findOne({ email: profile.emails[0].value });

    if (user) {
      // Update user's Google-specific information
      user.googleId = profile.id;
      user.name = profile.displayName;
      user.avatar = profile.photos[0].value;
      await user.save();
      return done(null, user);
    }

    // Create new user if doesn't exist
    user = new User({
      email: profile.emails[0].value,
      name: profile.displayName,
      googleId: profile.id,
      avatar: profile.photos[0].value,
      isVerified: true // Google accounts are already verified
    });

    await user.save();
    done(null, user);
  } catch (error) {
    done(error, null);
  }
})); 