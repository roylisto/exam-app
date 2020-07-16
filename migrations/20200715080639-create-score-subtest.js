'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('score_subtest', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rw: {
        type: Sequelize.INTEGER
      },
      kode_soal: {
        type: Sequelize.STRING
      },
      sw: {
        type: Sequelize.DECIMAL(4, 1)
      },
      umur: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('score_subtest');
  }
};