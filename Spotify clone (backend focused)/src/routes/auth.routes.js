const mongoose = require('mongoose');
const express = require('express');
const authController = require('../controllers/auth.controller')

const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/Login', authController.loginUser);
router.post('/Logout', authController.logoutUser);


module.exports = router;