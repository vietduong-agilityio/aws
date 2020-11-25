module.exports = (sequelize, DataType) => {
  const Messages = sequelize.define('Messages', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
      classMethods: {
        associate: (models) => {
          Messages.belongsTo(models.Users);
        }
      }
    });

  return Messages;
};