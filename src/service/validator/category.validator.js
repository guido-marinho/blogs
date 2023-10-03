const joi = require('joi');

const categoySchema = joi
  .object({
    name: joi.string().required(),
  })
  .messages({
    'any.required': '{{#label}} is required',
  });

module.exports = categoySchema;
