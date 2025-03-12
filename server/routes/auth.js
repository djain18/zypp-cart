const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');

// Google OAuth handler
router.post('/google', async (req, res) => {
  try {
    const { code } = req.body;
    const client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      'http://localhost:3001/auth/google/callback'
    );

    // Get tokens from Google
    const { tokens } = await client.getToken(code);
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    
    // Find or create user
    let user = await User.findOne({ email: payload.email });
    
    if (!user) {
      user = new User({
        email: payload.email,
        name: payload.name,
        googleId: payload.sub,
        avatar: payload.picture,
        isVerified: true
      });
      await user.save();
    } else {
      // Update existing user's Google info
      user.googleId = payload.sub;
      user.name = payload.name;
      user.avatar = payload.picture;
      await user.save();
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Return user data and token
    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role
      },
      token
    });
  } catch (error) {
    console.error('Google auth error:', error);
    res.status(500).json({ message: 'Authentication failed' });
  }
});

module.exports = router; 