'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const sw = [
      73, 77, 80, 84, 88, 91, 95, 98, 102, 105, 109, 112, 116, 120, 123, 126, 130, 133, 137, 141, 145,
      73, 77, 80, 84, 87, 90, 94, 97, 100, 104, 108, 111, 115, 118, 122, 125, 129, 132, 135, 139, 142,
      73, 76, 79, 83, 86, 90, 93, 97, 100, 103, 106, 110, 113, 117, 120, 124, 127, 130, 133, 136, 140,
      76, 79, 82, 85, 88, 91, 94, 97, 100, 102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135,
      76, 79, 82, 85, 88, 90, 93, 96, 99, 102, 105, 107, 110, 113, 116, 119, 122, 124, 127, 130, 133,
      74, 76, 80, 83, 86, 89, 92, 94, 97, 100, 103, 106, 109, 112, 115, 118, 121, 123, 126, 129, 132,
      74, 77, 80, 83, 86, 89, 91, 94, 97, 100, 103, 106, 109, 111, 114, 117, 120, 123, 126, 128, 131,
      75, 78, 80, 83, 86, 89, 92, 95, 97, 100, 103, 106, 108, 111, 114, 117, 120, 122, 125, 128, 131,
      74, 77, 80, 83, 85, 88, 91, 94, 97, 100, 103, 106, 109, 112, 115, 118, 121, 123, 126, 130, 133,
      76, 79, 81, 84, 87, 90, 92, 95, 98, 101, 104, 106, 109, 112, 115, 118, 120, 123, 126, 129, 131,
      77, 80, 82, 85, 87, 90, 93, 96, 98, 101, 104, 106, 109, 112, 115, 117, 120, 123, 125, 128, 131,
      78, 81, 84, 86, 89, 91, 95, 97, 100, 103, 105, 108, 111, 114, 116, 119, 122, 124, 127, 130, 133,
      78, 81, 84, 87, 89, 92, 95, 98, 101, 103, 106, 109, 112, 115, 117, 120, 123, 125, 129, 131, 134
    ];
    let subtest_ist = [];
    let rw = 0;    
    let kode_soal = 'WU';
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
      subtest_ist.push({
        rw: rw,
        kode_soal: kode_soal,
        sw: row,
        umur: umur
      });
      rw++;
    });
    return queryInterface.bulkInsert('score_subtest', subtest_ist, {});    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('score_subtest', null, {});
  }
};
