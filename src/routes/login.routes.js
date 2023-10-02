const { Router } = require('express');
const { loginController } = require('../controller');
const { validateLoginBody } = require('../middlewares');

const loginRouter = Router();

loginRouter.post('/', validateLoginBody, loginController.login);

module.exports = loginRouter;
