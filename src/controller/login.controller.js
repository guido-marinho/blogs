const { loginService } = require('../service');
const { UNAUTHORIZED } = require('../utils/mapHttp');

const login = async (req, res) => {
  const { email, password } = req.body;

  const serviceResponse = await loginService.login(email, password);

  if (serviceResponse.status === UNAUTHORIZED) {
    return res.status(400).json({ message: serviceResponse.data });
  }

  return res.status(200).json(serviceResponse.data);
};

module.exports = {
  login,
};
