// userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/add', UserController.addUser);

module.exports = router;
