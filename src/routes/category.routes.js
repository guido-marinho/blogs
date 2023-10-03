const { Router } = require('express');
const { categoryController } = require('../controller');
const validateAccessToken = require('../middlewares/validateAccessToken');

const categoryRouter = Router();

categoryRouter.use(validateAccessToken);

categoryRouter.post('/', categoryController.create);
categoryRouter.get('/', categoryController.getAll);

module.exports = categoryRouter;
