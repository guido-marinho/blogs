module.exports = (sequelize, DataTypes) => {
  const BlogPostModel = sequelize.define(
    'BlogPost',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      published: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      updated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts',
    }
  );

  BlogPostModel.associate = ({ User }) => {
    BlogPostModel.belongsTo(User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return BlogPostModel;
};
