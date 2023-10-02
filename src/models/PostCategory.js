module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    }
  );

  PostsCategories.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    Category.belongsToMany(BlogPost, {
      as: 'blogPosts',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategories;
};
