const { User } = require('../models');
const jwt = require('../auth/jwt');
const bcrypt = require('bcryptjs');
const userSchema = require('./validator/user.validator');
const {
  CONFLICT,
  CREATED,
  OK,
  NOT_FOUND,
  NO_CONTENT,
} = require('../utils/mapHttp');

const create = async (displayName, email, password, image) => {
  const { error } = userSchema.validate({ displayName, email, password });

  if (error) {
    return {
      status: CONFLICT,
      data: error.message,
    };
  }

  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    return {
      status: CONFLICT,
      data: 'User already registered',
    };
  }

  const hash = bcrypt.hashSync(password, 10);

  const user = await User.create({ displayName, email, password: hash, image });
  const { id } = user;
  const token = jwt.generateJwtToken({ id });

  return { status: CREATED, data: { token } };
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { status: OK, data: users };
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return {
      status: NOT_FOUND,
      data: 'User does not exist',
    };
  }

  return { status: NO_CONTENT, data: user };
};

const remove = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return {
      status: NOT_FOUND,
      data: 'User does not exist',
    };
  }

  await user.destroy();

  return { status: NO_CONTENT };
};

module.exports = {
  create,
  getAll,
  getById,
  remove,
};
