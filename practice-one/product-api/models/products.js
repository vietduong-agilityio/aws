module.exports = (sequelize, DataType) => {
  const Products = sequelize.define('Products', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
      classMethods: {
        associate: (models) => {
          Products.belongsTo(models.Users);
        }
      }
    });

  return Products;
};