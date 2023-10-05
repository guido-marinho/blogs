const { Router } = require('express');
const { postController } = require('../controller');
const validateAccessToken = require('../middlewares/validateAccessToken');
const validateUpdate = require('../middlewares/validateUpdate');

const postRouter = Router();

postRouter.use(validateAccessToken);

postRouter.post('/', postController.create);
postRouter.get('/search', postController.getBySearchTerm);
postRouter.get('/', postController.getAll);
postRouter.get('/:id', postController.getById);
postRouter.put('/:id', validateUpdate, postController.update);
postRouter.delete('/:id', postController.remove);

module.exports = postRouter;
