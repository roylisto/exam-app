'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('soal_mii', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomor: {
        type: Sequelize.INTEGER
      },
      paket_soal: {
        type: Sequelize.STRING
      },
      pertanyaan: {
        type: Sequelize.TEXT
      },
      pilihan: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('soal_mii');
  }
};