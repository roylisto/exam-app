'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const sw = [
      70, 74, 78, 82, 86, 90, 94, 98, 102, 106, 110, 114, 117, 122, 125, 129, 133, 137, 141, 145, 150,
      70, 74, 78, 82, 86, 89, 93, 97, 100, 104, 108, 112, 115, 119, 123, 127, 130, 134, 138, 142, 146,
      70, 74, 77, 81, 84, 88, 91, 95, 99, 102, 106, 109, 113, 116, 120, 124, 127, 131, 134, 138, 141,
      68, 72, 75, 79, 82, 86, 89, 93, 97, 100, 104, 107, 110, 114, 118, 121, 125, 128, 132, 136, 139,
      65, 69, 72, 76, 80, 84, 87, 91, 95, 98, 102, 106, 109, 113, 116, 120, 124, 128, 131, 135, 139,
      64, 66, 69, 73, 77, 81, 85, 89, 92, 96, 100, 104, 108, 112, 115, 119, 123, 127, 131, 135, 138,
      61, 64, 66, 70, 74, 78, 81, 85, 89, 93, 97, 101, 105, 109, 112, 116, 120, 124, 127, 132, 135,
      63, 66, 69, 73, 76, 80, 83, 87, 91, 95, 98, 102, 106, 109, 113, 116, 120, 124, 128, 131, 135,
      65, 69, 73, 75, 79, 82, 85, 89, 92, 95, 99, 102, 105, 109, 112, 115, 119, 122, 125, 129, 132,
      65, 69, 72, 75, 79, 82, 85, 89, 92, 96, 100, 103, 106, 110, 113, 117, 120, 123, 127, 130, 134,
      69, 72, 75, 78, 81, 85, 88, 91, 94, 97, 101, 104, 107, 110, 114, 117, 120, 123, 126, 130, 133,
      73, 76, 80, 83, 85, 89, 92, 95, 98, 101, 104, 108, 111, 114, 117, 120, 123, 126, 130, 133, 136,
      75, 78, 81, 84, 87, 90, 94, 97, 100, 103, 106, 110, 113, 116, 119, 123, 126, 129, 132, 135, 139,
    ];
    let subtest_2_ist = [];
    let rw = 0;    
    let kode_soal = 'WA';
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
      subtest_2_ist.push({
        rw: rw,
        kode_soal: kode_soal,
        sw: row,
        umur: umur
      });
      rw++;
    });
    return queryInterface.bulkInsert('score_subtest', subtest_2_ist, {});    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('score_subtest', null, {});
  }
};
