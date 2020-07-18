'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const sw = [
      0, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 107, 107, 107, 107, 107, 107, 107, 107, 107, 107, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 151, 151, 151, 151, 151, 151, 151, 151, 151, 151, 157, 157, 157, 157, 157, 157, 157, 157, 157, 157, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 
      0, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 139, 139, 139, 139, 139, 139, 139, 139, 139, 139, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 
      0, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 106, 106, 106, 106, 106, 106, 106, 106, 106, 106, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 141, 141, 141, 141, 141, 141, 141, 141, 141, 141, 146, 146, 146, 146, 146, 146, 146, 146, 146, 146, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 
      0, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 107, 107, 107, 107, 107, 107, 107, 107, 107, 107, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 
      0, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 
      0, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94, 94, 94, 94, 94, 94, 94, 94, 94, 94, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 106, 106, 106, 106, 106, 106, 106, 106, 106, 106, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 
      0, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 107, 107, 107, 107, 107, 107, 107, 107, 107, 107, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 
      0, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 107, 107, 107, 107, 107, 107, 107, 107, 107, 107, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 
      0, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 107, 107, 107, 107, 107, 107, 107, 107, 107, 107, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 
      0, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 107, 107, 107, 107, 107, 107, 107, 107, 107, 107, 111, 111, 111, 111, 111, 111, 111, 111, 111, 111, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 
      0, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 
      0, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 107, 107, 107, 107, 107, 107, 107, 107, 107, 107, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 118, 118, 118, 118, 118, 118, 118, 118, 118, 118, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 124, 124, 124, 124, 124, 124, 124, 124, 124, 124, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 
      0, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132,
    ];
    let gesamt = [];
    let rw = 0;    
    let kode_soal = 'gesampt';
    let umur = 13;
    let flag = umur;
    sw.forEach((row, index) => {
      if(index > 2160) {
        umur = 46;
      } else if (index > 1980) {
        umur = 45;
      } else if (index > 1800) {
        umur = 39;
      } else if (index > 1620) {
        umur = 33;
      } else if (index > 1440) {
        umur = 28;
      } else if (index > 1260) {
        umur = 24;
      } else if (index > 1080) {
        umur = 20;
      } else if (index > 900) {
        umur = 18;
      } else if (index > 720) {
        umur = 17;
      } else if (index > 540) {
        umur = 16;
      } else if (index > 360) {
        umur = 15;
      } else if (index > 180) {
        umur = 14;
      }    
      
      if(flag != umur) {
        rw = 0;
        flag = umur
      }
      gesamt.push({
        rw: rw,
        kode_soal: kode_soal,
        sw: row,
        umur: umur
      });
      rw++;
    });
    return queryInterface.bulkInsert('score_subtest', gesamt, {});    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('score_subtest', null, {});
  }
};
