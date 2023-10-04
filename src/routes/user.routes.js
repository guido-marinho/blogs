const { Router } = require('express');
const { userController } = require('../controller');
const { validateAccessToken } = require('../middlewares');

const userRouter = Router();

userRouter.post('/newUser', userController.create);

userRouter.use(validateAccessToken);

userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getById);
userRouter.delete('/:id', userController.remove);
userRouter.put('/:id', userController.update);

module.exports = userRouter;
