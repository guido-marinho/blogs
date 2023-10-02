const { Router } = require('express');
const { loginController } = require('../controller');
const validateLoginBody = require('../middlewares/validateLoginBody');

const loginRouter = Router();

loginRouter.post('/', validateLoginBody, loginController.login);

module.exports = loginRouter;
