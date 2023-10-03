'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'posts_categories',
      {
        postId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'blog_posts',
            key: 'id',
          },
          field: 'post_id',
        },
        categoryId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'categories',
            key: 'id',
          },
          field: 'category_id',
        },
      },
      {
        timestamps: false,
        tableName: 'posts_categories',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  },
};
