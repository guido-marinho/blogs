const { userService } = require('../service');
const { CONFLICT } = require('../utils/mapHttp');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, data } = await userService.createUser(
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

module.exports = {
  create,
};
