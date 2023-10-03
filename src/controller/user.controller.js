const { userService } = require('../service');
const { CONFLICT, NOT_FOUND } = require('../utils/mapHttp');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, data } = await userService.create(
    displayName,
    email,
    password,
    image
  );

  if (status === CONFLICT)
    return res.status(409).json({
      message: data,
    });

  return res.status(201).json(data);
};

const getAll = async (_req, res) => {
  const { data } = await userService.getAll();

  return res.status(200).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await userService.getById(id);

  if (status === NOT_FOUND)
    return res.status(404).json({
      message: data,
    });

  return res.status(200).json(data);
};

const remove = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await userService.remove(id);

  if (status === NOT_FOUND)
    return res.status(404).json({
      message: data,
    });

  return res.status(204).end();
};

module.exports = {
  create,
  getAll,
  getById,
  remove,
};
