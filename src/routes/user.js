const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');

// Signup
router.post('/signup',UserController.signUp);

// Login
router.post('/login', UserController.login);


module.exports = router;