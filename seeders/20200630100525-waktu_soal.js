'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const all_soal = [
      "subtest_1_ist", "subtest_2_ist", "subtest_3_ist", "subtest_4_ist", "subtest_5_ist",
      "subtest_6_ist", "subtest_7_ist", "subtest_8_ist", "subtest_9_ist",
      "Bagian_1_Verb_Ling", "Bagian_2_Log-Math", "Bagian_3_Spat", "Bagian_4_Mus", "Bagian_5_Bod-Kin",
      "Bagian_6_Inter", "Bagian_7_Intra", "Bagian_8_Nat"
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
