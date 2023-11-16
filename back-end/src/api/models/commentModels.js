const { Model, DataTypes } = require("sequelize");

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.INTEGER,
        publication_id: DataTypes.INTEGER,
        comment: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "comment",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Users, {
      foreignKey: "user_id",
      as: "user",
    });
    this.belongsTo(models.Publication, {
      foreignKey: "publication_id",
      as: "publication",
    });
  }
}

module.exports = Comment;
