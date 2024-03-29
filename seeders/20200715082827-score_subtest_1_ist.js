'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const sw = [
      71, 75, 79, 83, 87, 91, 95, 99, 103, 107, 110, 115, 119, 123, 126, 131, 135, 138, 142, 146, 151,
      72, 75, 79, 83, 87, 91, 95, 98, 102, 106, 110, 114, 118, 122, 125, 129, 133, 137, 141, 145, 149,
      73, 77, 80, 83, 87, 90, 93, 97, 101, 104, 107, 111, 114, 118, 121, 125, 128, 131, 135, 138, 142,
      74, 77, 80, 83, 86, 89, 92, 95, 98, 101, 104, 107, 110, 113, 115, 119, 122, 125, 128, 131, 134,
      72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108, 111, 114, 116, 119, 122, 125, 128, 131,
      72, 75, 78, 81, 83, 86, 89, 92, 94, 97, 100, 103, 106, 108, 111, 114, 117, 119, 122, 125, 128,
      68, 70, 73, 76, 79, 82, 85, 87, 90, 93, 96, 99, 101, 104, 107, 110, 113, 116, 119, 122, 124,
      66, 68, 71, 74, 78, 80, 83, 86, 89, 92, 95, 98, 101, 104, 107, 110, 113, 116, 119, 123, 126,
      65, 67, 70, 73, 76, 79, 82, 86, 89, 92, 95, 98, 101, 104, 108, 111, 114, 117, 120, 123, 126,
      65, 68, 71, 74, 78, 81, 82, 86, 89, 92, 93, 98, 101, 104, 107, 110, 113, 116, 119, 122, 126,
      68, 71, 75, 77, 80, 83, 86, 89, 92, 95, 98, 101, 104, 107, 110, 113, 116, 119, 121, 124, 128,
      73, 75, 78, 81, 84, 87, 90, 92, 95, 98, 101, 104, 107, 110, 113, 115, 118, 121, 124, 127, 130,
      75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 104, 107, 110, 113, 116, 119, 122, 125, 128, 131, 134
    ];
    let subtest_1_ist = [];
    let rw = 0;    
    let kode_soal = 'SE';
    let umur = 13;
    let flag = umur;
    sw.forEach((row, index) => {
      if(index > 251) {
        umur = 46;
      } else if (index > 230) {
        umur = 45;
      } else if (index > 209) {
        umur = 39;
      } else if (index > 188) {
        umur = 33;
      } else if (index > 167) {
        umur = 28;
      } else if (index > 146) {
        umur = 24;
      } else if (index > 125) {
        umur = 20;
      } else if (index > 104) {
        umur = 18;
      } else if (index > 83) {
        umur = 17;
      } else if (index > 62) {
        umur = 16;
      } else if (index > 41) {
        umur = 15;
      } else if (index > 20) {
        umur = 14;
      }    
      
      if(flag != umur) {
        rw = 0;
        flag = umur
      }
      subtest_1_ist.push({
        rw: rw,
        kode_soal: kode_soal,
        sw: row,
        umur: umur
      });
      rw++;
    });
    return queryInterface.bulkInsert('score_subtest', subtest_1_ist, {});    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('score_subtest', null, {});
  }
};
