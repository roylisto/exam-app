'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('soal_ist', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomor: {
        type: Sequelize.INTEGER
      },
      kategori: {
        type: Sequelize.STRING
      },
      paket_soal: {
        type: Sequelize.STRING
      },
      pertanyaan: {
        type: Sequelize.TEXT
      },
      kunci_jawaban: {
        type: Sequelize.STRING
      },
      pilihan: {
        type: Sequelize.TEXT,
      },
      waktu: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('soal_ist');
  }
};