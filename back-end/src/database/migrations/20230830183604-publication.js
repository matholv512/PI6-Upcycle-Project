"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("publication", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "user", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      publ_title: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      publ_description: {
        type: Sequelize.STRING(1000),
        allowNull: true,
      },
      publ_midia: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
      },
      publ_midia_type: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      publ_like: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("publication");
  },
};
