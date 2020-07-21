'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addIndex('log_soal_peserta', ['jenis_soal','paket_soal', 'peserta_id']),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeIndex('log_soal_peserta', 'log_soal_peserta_jenis_soal_paket_soal_peserta_id'),
    ]);
  }
};
