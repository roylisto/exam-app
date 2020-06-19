'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('soal', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
        type: Sequelize.STRING(1)
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
    return queryInterface.dropTable('soal');
  }
};