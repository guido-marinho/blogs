const jwt = require('../auth/jwt');

const validateAccessToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = authorization.split(' ')[1];

  try {
    const user = jwt.decodeJwtToken(token);
    req.locals = user;
    next();
  } catch (err) {
    console.log(err.message);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateAccessToken;
