'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    const subtest_pertanyaan = [
      'Kata yang mempunyai huruf permulaan -A -adalah suatu', 'Kata yang mempunyai huruf permulaan -B -adalah suatu', 'Kata yang mempunyai huruf permulaan -C -adalah suatu', 'Kata yang mempunyai huruf permulaan -D -adalah suatu', 'Kata yang mempunyai huruf permulaan -E -adalah suatu', 'Kata yang mempunyai huruf permulaan -F -adalah suatu', 'Kata yang mempunyai huruf permulaan -G -adalah suatu', 'Kata yang mempunyai huruf permulaan -H -adalah suatu', 'Kata yang mempunyai huruf permulaan -I -adalah suatu', 'Kata yang mempunyai huruf permulaan -J -adalah suatu', 'Kata yang mempunyai huruf permulaan -K -adalah suatu', 'Kata yang mempunyai huruf permulaan -L -adalah suatu', 'Kata yang mempunyai huruf permulaan -M -adalah suatu', 'Kata yang mempunyai huruf permulaan -N -adalah suatu', 'Kata yang mempunyai huruf permulaan -O -adalah suatu', 'Kata yang mempunyai huruf permulaan -P -adalah suatu', 'Kata yang mempunyai huruf permulaan -R -adalah suatu', 'Kata yang mempunyai huruf permulaan -S -adalah suatu', 'Kata yang mempunyai huruf permulaan -T -adalah suatu', 'Kata yang mempunyai huruf permulaan -U -adalah suatu'
    ];
    
    const subtest_pilgan = [
      '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', 
      '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', 
      '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', 
      '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', 
      '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}', '{"a":"bunga","b":"perkakas","c":"burung","d":"kesenian","e":"binatang"}'
    ];
    
    const subtest_kunci = [
      'd', 'e', 'b', 'a', 'c', 'a', 'd', 'e', 'c', 'b', 'b', 'a', 'e', 'c', 'd', 'b', 'e', 'a', 'c', 'd'
    ];
    let soal_subtest = [];
    subtest_pertanyaan.forEach((row, index) => {
      soal_subtest.push({
        nomor: index+1,
        kategori: 'pilgan',
        paket_soal: 'subtest_9_ist',
        pertanyaan: row,
        kunci_jawaban: subtest_kunci[index],
        pilihan: subtest_pilgan[index]
      })
    });

    return queryInterface.bulkInsert('soal_ist', soal_subtest, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('soal_ist', null, {});    
  }
};
