'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addIndex('score_subtest', ['rw','umur','kode_soal']),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeIndex('score_subtest', 'score_subtest_rw_umur_kode_soal'),
    ]);
  }
};
