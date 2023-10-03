module.exports = (sequelize, DataTypes) => {
  const CategorieModel = sequelize.define(
    'Category',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: 'categories',
    }
  );

  return CategorieModel;
};
