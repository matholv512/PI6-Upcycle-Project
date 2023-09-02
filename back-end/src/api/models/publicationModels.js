const { Model, DataTypes } = require("sequelize");

class Publication extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.INTEGER,
        publ_title: DataTypes.STRING,
        publ_description: DataTypes.STRING,
        publ_midia: DataTypes.STRING,
        publ_comments: DataTypes.STRING,
        publ_like: DataTypes.INTEGER,
        publ_deslike: DataTypes.INTEGER
      },
      {
        sequelize,
        tableName: "publication",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Users, {
      foreignKey: "user_id",
      as: "user",
    });
  }
}

module.exports = Publication;
