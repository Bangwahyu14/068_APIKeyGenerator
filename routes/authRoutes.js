const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Halaman login + register
router.get('/login', (req, res) => {
  res.sendFile('login.html', { root: './public/html' });
});

router.get('/register', (req, res) => {
  res.sendFile('register.html', { root: './public/html' });
});

// Login & Register action
router.post('/login', authController.loginUser);
router.post('/register', authController.registerUser);

module.exports = router;
