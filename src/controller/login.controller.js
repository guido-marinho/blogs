const { loginService } = require('../service');
const { UNAUTHORIZED } = require('../utils/mapHttp');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, data } = await loginService.login(email, password);

  if (status === UNAUTHORIZED) {
    return res.status(400).json({ message: data });
  }

  return res.status(200).json(data);
};

module.exports = {
  login,
};
