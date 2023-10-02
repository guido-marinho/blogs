const { User } = require('../models');
const jwt = require('../auth/jwt');
const bcrypt = require('bcryptjs');
const { CONFLICT, CREATED } = require('../utils/mapHttp');

const createUser = async (displayName, email, password, image) => {
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

module.exports = {
  createUser,
};
