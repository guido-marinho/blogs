const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateJwtToken = (payload) =>
  jwt.sign(payload, secret, { expiresIn: '30d' });

const decodeJwtToken = (token) => jwt.verify(token, secret);

module.exports = {
  generateJwtToken,
  decodeJwtToken,
};
