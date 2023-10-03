const { categoryService } = require('../service');
const { BAD_REQUEST } = require('../utils/mapHttp');

const create = async (req, res) => {
  const { name } = req.body;

  const { status, data } = await categoryService.create(name);

  if (status === BAD_REQUEST) return res.status(400).json({ message: data });

  res.status(201).json(data);
};

const getAll = async (_req, res) => {
  const { data } = await categoryService.getAll();

  res.status(200).json(data);
};

module.exports = {
  create,
  getAll,
};
