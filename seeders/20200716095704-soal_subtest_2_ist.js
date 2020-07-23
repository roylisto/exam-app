'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const subtest_2_pilgan = [
      '{"a":"lingkaran","b":"panah","c":"elips","d":"busur","e":"lengkungan"}',
      '{"a":"mengetuk","b":"memaki","c":"menjahit","d":"menggergaji","e":"memukul"}',
      '{"a":"lebar","b":"keliling","c":"luas","d":"isi","e":"panjang"}',
      '{"a":"mengikat","b":"menyatukan","c":"melepaskan","d":"mengaitkan","e":"melekatkan"}',
      '{"a":"arah","b":"timur","c":"perjalanan","d":"tujuan","e":"selatan"}',
      '{"a":"jarak","b":"perpisahan","c":"tugas","d":"batas","e":"perceraian"}', '{"a":"saringan","b":"kelambu","c":"payung","d":"tapisan","e":"jala"}', '{"a":"putih","b":"pucat","c":"buram","d":"kasar","e":"berkilauan"}', '{"a":"otobis","b":"pesawat terbang","c":"sepeda motor","d":"sepeda","e":"kapal api"}', '{"a":"biola","b":"seruling","c":"klarinet","d":"terompet","e":"saxophon"}', '{"a":"bergelombang","b":"kasar","c":"berduri","d":"licin","e":"lurus"}', '{"a":"jam","b":"kompas","c":"penunjuk jalan","d":"bintang pari","e":"arah"}', '{"a":"kebijaksanaan","b":"pendidikan","c":"perencanaan","d":"penempatan","e":"pengerahan"}', '{"a":"bermotor","b":"berjalan","c":"berlayar","d":"bersepeda","e":"berkuda"}', '{"a":"gambar","b":"lukisan","c":"potret","d":"patung","e":"ukiran"}', '{"a":"panjang","b":"lonjong","c":"runcing","d":"bulat","e":"bersudut"}', '{"a":"kunci","b":"palang pintu","c":"gerendel","d":"gunting","e":"obeng"}', '{"a":"jembatan ","b":"batas ","c":"perkawinan","d":"pagar","e":"masyarakat"}', '{"a":"mengetam","b":"memahat","c":"mengasah","d":"melicinkan","e":"menggosok"}', '{"a":"batu","b":"baja","c":"bulu","d":"karet","e":"kayu"}'
    ];

    const subtest_2_kunci = [
      'a', 'b', 'd', 'c', 'c', 'c', 'c', 'd', 'd', 'a', 'e', 'a', 'a', 'b', 'c', 'a', 'd', 'e', 'b', 'c'
    ];
    let soal_subtest2 = [];
    subtest_2_kunci.forEach((row, index) => {
      soal_subtest2.push({
        nomor: index+1,
        kategori: 'nosoal',
        paket_soal: 'subtest_2_ist',
        pertanyaan: '',
        kunci_jawaban: row,
        pilihan: subtest_2_pilgan[index]
      })
    });

    return queryInterface.bulkInsert('soal_ist', soal_subtest2, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('soal_ist', null, {});
  }
};
