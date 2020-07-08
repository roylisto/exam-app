'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const all_soal = [
      "subtest_1_ist", "subtest_2_ist", "subtest_3_ist", "subtest_4_ist", "subtest_5_ist",
      "subtest_6_ist", "subtest_7_ist", "subtest_8_ist", "subtest_9_ist",
      "bagian_1_verb_ling", "bagian_2_log_math", "bagian_3_spat", "bagian_4_mus", "bagian_5_bod_kin",
      "bagian_6_inter", "bagian_7_intra", "bagian_8_nat"
    ];
    let waktu_soal = []
    all_soal.forEach((element, index) => {
      let jenis_soal = (index<9) ? 'ist': 'mii' 
      waktu_soal.push({
        jenis_soal: jenis_soal,
        paket_soal: element,
        waktu: 5
      });
    });
    return queryInterface.bulkInsert('waktu_soal', waktu_soal, {});    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('waktu_soal', null, {});
  }
};
