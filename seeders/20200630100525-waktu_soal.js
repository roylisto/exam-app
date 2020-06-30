'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('waktu_soal', [{
        jenis_soal: 'ist',
        paket_soal: 'subtest1',
        waktu: 5
      }, {
        jenis_soal: 'ist',
        paket_soal: 'subtest2',
        waktu: 5
      }, {
        jenis_soal: 'mii',
        paket_soal: 'Bagian 1 Verb Ling',
        waktu: 10
      }], {});    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('waktu_soal', null, {});
  }
};
