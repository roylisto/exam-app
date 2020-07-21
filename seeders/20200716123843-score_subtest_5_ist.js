'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const sw = [
      78, 81, 85, 89, 93, 96, 100, 104, 107, 111, 115, 119, 122, 126, 129, 133, 137, 140, 144, 148, 152, 
      75, 78, 82, 86, 90, 93, 97, 101, 105, 109, 112, 116, 119, 123, 126, 130, 134, 137, 140, 144, 147,
      79, 82, 85, 88, 91, 94, 97, 100, 103, 106, 109, 112, 115, 118, 121, 124, 127, 130, 133, 136, 140, 
      77, 80, 83, 86, 89, 92, 95, 98, 100, 104, 107, 110, 113, 116, 119, 122, 124, 127, 129, 133, 137, 
      76, 79, 82, 85, 88, 91, 93, 96, 99, 102, 105, 108, 111, 113, 116, 119, 122, 125, 127, 130, 134, 
      75, 78, 81, 84, 86, 89, 92, 95, 98, 101, 104, 107, 109, 112, 115, 118, 121, 124, 126, 129, 132, 
      74, 77, 80, 83, 86, 89, 91, 93, 97, 100, 103, 106, 109, 111, 114, 117, 120, 123, 126, 128, 131, 
      75, 77, 80, 83, 86, 88, 91, 94, 97, 99, 102, 105, 107, 110, 113, 115, 118, 121, 123, 126, 129, 
      72, 76, 80, 82, 84, 87, 90, 93, 96, 98, 101, 104, 107, 110, 112, 115, 118, 120, 123, 126, 130, 
      75, 77, 80, 83, 85, 88, 91, 93, 96, 99, 102, 104, 107, 110, 112, 115, 118, 121, 124, 126, 129, 
      75, 77, 80, 83, 86, 88, 91, 94, 97, 99, 102, 105, 109, 111, 113, 116, 119, 122, 124, 127, 130, 
      77, 79, 82, 85, 88, 90, 93, 96, 98, 101, 104, 106, 109, 112, 115, 117, 120, 123, 125, 128, 131, 
      77, 79, 81, 84, 88, 91, 94, 97, 99, 102, 104, 107, 110, 113, 116, 119, 121, 125, 128, 131, 134
    ];
    let subtest_5_ist = [];
    let rw = 0;    
    let kode_soal = 'RA';
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
      subtest_5_ist.push({
        rw: rw,
        kode_soal: kode_soal,
        sw: row,
        umur: umur
      });
      rw++;
    });
    return queryInterface.bulkInsert('score_subtest', subtest_5_ist, {});    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('score_subtest', null, {});
  }
};
