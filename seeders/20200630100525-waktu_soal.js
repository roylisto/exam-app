'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('waktu_soal', [
      {
        jenis_soal: 'ist',
        paket_soal: 'subtest_1_ist',
        waktu: 360
      },
      {
        jenis_soal: 'ist',
        paket_soal: 'subtest_2_ist',
        waktu: 360
      },
      {
        jenis_soal: 'ist',
        paket_soal: 'subtest_3_ist',
        waktu: 420
      },
      {
        jenis_soal: 'ist',
        paket_soal: 'subtest_4_ist',
        waktu: 480
      },
      {
        jenis_soal: 'ist',
        paket_soal: 'subtest_5_ist',
        waktu: 600
      },
      {
        jenis_soal: 'ist',
        paket_soal: 'subtest_6_ist',
        waktu: 600
      },
      {
        jenis_soal: 'ist',
        paket_soal: 'subtest_7_ist',
        waktu: 420
      },
      {
        jenis_soal: 'ist',
        paket_soal: 'subtest_8_ist',
        waktu: 540
      },
      {
        jenis_soal: 'ist',
        paket_soal: 'subtest_9_ist',
        waktu: 540
      },
      {
        jenis_soal: 'mii',
        paket_soal: 'bagian_1_verb_ling',
        waktu: 2700
      },
      {
        jenis_soal: 'mii',
        paket_soal: 'bagian_2_log_math',
        waktu: 2700
      },
      {
        jenis_soal: 'mii',
        paket_soal: 'bagian_3_spat',
        waktu: 2700
      },
      {
        jenis_soal: 'mii',
        paket_soal: 'bagian_4_mus',
        waktu: 2700
      },
      {
        jenis_soal: 'mii',
        paket_soal: 'bagian_5_bod_kin',
        waktu: 2700
      },
      {
        jenis_soal: 'mii',
        paket_soal: 'bagian_6_inter',
        waktu: 2700
      },
      {
        jenis_soal: 'mii',
        paket_soal: 'bagian_7_intra',
        waktu: 2700
      },
      {
        jenis_soal: 'mii',
        paket_soal: 'bagian_8_nat',
        waktu: 2700
      }
    ], {});    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('waktu_soal', null, {});
  }
};
