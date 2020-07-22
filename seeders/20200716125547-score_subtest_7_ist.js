'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const sw = [
      74, 78, 82, 86, 89, 93, 95, 98, 101, 105, 108, 112, 115, 119, 122, 125, 129, 132, 135, 139, 142,
      75, 78, 81, 84, 87, 91, 94, 97, 100, 104, 107, 110, 113, 116, 120, 123, 126, 129, 132, 135, 139,
      77, 80, 83, 85, 87, 90, 93, 96, 99, 102, 104, 107, 110, 113, 115, 118, 121, 124, 127, 130, 133,
      76, 79, 82, 85, 87, 90, 92, 95, 98, 100, 103, 106, 109, 111, 114, 117, 120, 122, 125, 127, 130,
      76, 79, 81, 84, 87, 89, 93, 95, 97, 100, 103, 105, 108, 111, 113, 116, 119, 121, 125, 127, 130,
      74, 76, 79, 82, 85, 88, 90, 93, 96, 99, 101, 104, 107, 110, 113, 115, 118, 121, 124, 127, 130,
      74, 77, 79, 82, 85, 87, 90, 92, 95, 98, 100, 103, 106, 109, 111, 114, 117, 120, 122, 125, 128,
      75, 78, 80, 83, 85, 88, 91, 93, 96, 98, 101, 103, 106, 108, 111, 113, 116, 119, 121, 124, 127,
      74, 77, 80, 82, 85, 88, 90, 93, 96, 99, 101, 104, 107, 109, 112, 115, 118, 120, 123, 126, 130,
      75, 77, 80, 83, 85, 88, 91, 93, 95, 99, 101, 103, 106, 109, 111, 115, 117, 120, 123, 127, 128,
      77, 80, 82, 85, 87, 90, 93, 95, 98, 101, 103, 105, 108, 110, 113, 115, 118, 120, 123, 126, 128,
      79, 81, 84, 86, 89, 91, 93, 97, 99, 102, 104, 107, 109, 112, 115, 117, 120, 122, 125, 128, 130,
      80, 82, 85, 88, 91, 93, 96, 98, 101, 104, 106, 109, 112, 115, 117, 119, 122, 125, 128, 131, 133
    ];
    let subtest_ist = [];
    let rw = 0;    
    let kode_soal = 'FA';
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