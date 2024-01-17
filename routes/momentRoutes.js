const express = require('express');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const momentController = require('../controllers/momentController');

const momentRouter = express.Router();

momentRouter.post('/add', uploadMiddleware.single('image'), momentController.addMoment);

momentRouter.get('/list', momentController.listMoments);

module.exports = momentRouter;

