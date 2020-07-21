'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addIndex('waktu_soal', ['jenis_soal', 'paket_soal']),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeIndex('waktu_soal', 'waktu_soal_jenis_soal_paket_soal'),
    ]);
  }
};
