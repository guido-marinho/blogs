module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    }
  );

  UserModel.associate = ({ BlogPost }) => {
    UserModel.hasMany(BlogPost, {
      foreignKey: 'userId',
      as: 'blogPosts',
    });
  };

  return UserModel;
};
