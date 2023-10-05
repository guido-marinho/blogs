const { Op } = require('sequelize');
const { BlogPost, Category, User } = require('../models');
const { BAD_REQUEST, CREATED, OK, NOT_FOUND } = require('../utils/mapHttp');

const create = async (title, content, categoryIds, userId) => {
  const categories = await Category.findAll({
    where: { id: { [Op.in]: categoryIds } },
  });

  if (categories.length !== categoryIds.length) {
    return { status: BAD_REQUEST, data: '"categoryIds" not found' };
  }

  const post = await BlogPost.create({ title, content, userId });

  await post.addCategories(categories);

  return { status: CREATED, data: post };
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: OK, data: posts };
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) {
    return { status: NOT_FOUND, data: '"post" not found' };
  }

  return { status: OK, data: post };
};

const getBySearchTerm = async (q) => {
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!posts) return [];

  return { status: OK, data: posts };
};

const update = async (id, title, content, userId) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (post.userId !== userId) {
    return { status: BAD_REQUEST, data: 'Unauthorized user' };
  }

  await post.update({ title, content });

  return { status: OK, data: post };
};

const remove = async (id, userId) => {
  const post = await BlogPost.findByPk(id);

  if (!post) {
    return { status: NOT_FOUND, data: '"post" not exists' };
  }

  if (post.userId !== userId) {
    return { status: BAD_REQUEST, data: 'Unauthorized user' };
  }

  await post.destroy();

  return { status: OK, data: post };
};

module.exports = {
  create,
  getAll,
  getById,
  getBySearchTerm,
  update,
  remove,
};
