const { Router } = require('express');
const { userController } = require('../controller');

const newUserRouter = Router();

newUserRouter.post('/', userController.create);

module.exports = newUserRouter;
