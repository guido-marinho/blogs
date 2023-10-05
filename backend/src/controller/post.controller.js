const { postService } = require('../service');
const { BAD_REQUEST, NOT_FOUND } = require('../utils/mapHttp');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.locals;

  const { status, data } = await postService.create(
    title,
    content,
    categoryIds,
    id
  );

  if (status === BAD_REQUEST) {
    return res.status(400).json({ message: data });
  }

  return res.status(201).json(data);
};

const getAll = async (_req, res) => {
  const { data } = await postService.getAll();

  return res.status(200).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await postService.getById(id);

  if (status === NOT_FOUND) {
    return res.status(404).json({ message: data });
  }

  return res.status(200).json(data);
};

const getBySearchTerm = async (req, res) => {
  const { q } = req.query;

  const posts = await postService.getBySearchTerm(q);

  return res.status(200).json(posts);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { id: userId } = req.locals;

  const { status, data } = await postService.update(id, title, content, userId);

  if (status === BAD_REQUEST) {
    return res.status(401).json({ message: data });
  }

  return res.status(200).json(data);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.locals;

  const { status, data } = await postService.remove(id, userId);

  if (status === NOT_FOUND) return res.status(404).json({ message: data });

  if (status === BAD_REQUEST) return res.status(401).json({ message: data });

  return res.status(204).json({ message: 'Post deleted successfully' });
};

module.exports = {
  create,
  getAll,
  getById,
  getBySearchTerm,
  update,
  remove,
};
