const joi = require('joi');

const userSchema = joi
  .object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  })
  .messages({
    'string.min':
      '{{#label}} length must be at least {{#limit}} characters long',
    'string.email': '{{#label}} must be a valid email',
  });

module.exports = userSchema;
