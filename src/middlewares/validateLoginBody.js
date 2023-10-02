const vaidateLogin = (req, res, next) => {
  const { email, password } = req.body;

  const emailRegex = /\S+@\S+\.\S+/;
  const validPassword = password.length >= 6;

  if (!emailRegex.test(email) || !validPassword) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = vaidateLogin;
