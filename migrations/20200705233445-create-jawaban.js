'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jawaban', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jawaban_peserta: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      peserta_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      paket_soal: {
        allowNull: false,
        type: Sequelize.STRING
      },
      jenis_soal: {
        allowNull: false,
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jawaban');
  }
};