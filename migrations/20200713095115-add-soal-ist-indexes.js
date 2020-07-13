'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addIndex('soal_ist', ['paket_soal', 'nomor']),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeIndex('soal_ist', 'soal_ist_paket_soal_nomor'),
    ]);
  }
};
