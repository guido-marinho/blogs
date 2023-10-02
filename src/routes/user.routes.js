const { Router } = require('express');
const { userController } = require('../controller');

const userRouter = Router();

userRouter.post('/', userController.create);

module.exports = userRouter;
