const express = require('express');
const {
  registerUser,
  loginUser,
  getMe,
  updateProfile,
  updatePassword
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.put('/profile', protect, updateProfile);
router.put('/updatepassword', protect, updatePassword);

module.exports = router; 