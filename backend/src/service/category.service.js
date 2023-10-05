const { Category } = require('../models');
const categorySchema = require('./validator/category.validator');
const { BAD_REQUEST, CREATED, OK } = require('../utils/mapHttp');

const create = async (name) => {
  const { error } = categorySchema.validate({ name });
  if (error) return { status: BAD_REQUEST, data: error.message };

  const newCategory = await Category.create({ name });
  return { status: CREATED, data: newCategory };
};

const getAll = async () => {
  const categories = await Category.findAll();
  return { status: OK, data: categories };
};

module.exports = {
  create,
  getAll,
};
