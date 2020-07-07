'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('waktu_soal', [{
        jenis_soal: 'ist',
        paket_soal: 'subtest 1 ist',
        waktu: 5
      }, {
        jenis_soal: 'ist',
        paket_soal: 'subtest 2 ist',
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
