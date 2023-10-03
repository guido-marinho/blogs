const { User } = require('../models');
const jwt = require('../auth/jwt');
const bcrypt = require('bcryptjs');
const { OK, UNAUTHORIZED } = require('../utils/mapHttp');

const login = async (email, password) => {
  const newUser = await User.findOne({ where: { email } });

  if (!newUser || !bcrypt.compareSync(password, newUser.password)) {
    return {
      status: UNAUTHORIZED,
      data: 'Invalid fields',
    };
  }

  const { id } = newUser;
  const token = jwt.generateJwtToken({ id });

  return {
    status: OK,
    data: { token },
  };
};

module.exports = {
  login,
};
