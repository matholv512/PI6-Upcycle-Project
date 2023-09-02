const { Model, DataTypes } = require("sequelize");

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        user_name: DataTypes.STRING,
        user_email: DataTypes.STRING,
        user_password: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "user",
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Publication, {
      foreignKey: "user_id",
      as: "user",
    });
  }
}

module.exports = Users;
