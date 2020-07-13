'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addIndex('soal_mii', ['paket_soal', 'nomor']),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeIndex('soal_mii', 'soal_mii_paket_soal_nomor'),
    ]);
  }
};
