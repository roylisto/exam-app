'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('soal_ist', [{
        nomor: 1,
        kategori: 'pilgan',
        paket_soal: 'subtest 1 ist',
        pertanyaan: 'test soal no 1 subtest1?',
        kunci_jawaban: 'a',
        pilihan: '{"a":"bandung", "b":"jakarta", "c":"palembang", "d":"jambi"}'
      }, {
        nomor: 2,
        kategori: 'pilgan',
        paket_soal: 'subtest 1 ist',
        pertanyaan: 'test soal no 2 subtest3?',
        kunci_jawaban: 'a',
        pilihan: '{"a":"motor", "b":"mobil"}'
      }, {
        nomor: 3,
        kategori: 'gambar',
        paket_soal: 'subtest 5 ist',
        pertanyaan: 'test soal no 1 subtest5?',
        kunci_jawaban: 'd',
        pilihan: '{"a":"bandung.jpg", "b":"jakarta.jpg", "c":"palembang.jpg", "d":"jambi.jpg"}'
      }, {
        nomor: 4,
        kategori: 'nosoal',
        paket_soal: 'subtest 6 ist',
        pertanyaan: null,
        kunci_jawaban: 'c',
        pilihan: '{"a":"bandung", "b":"jakarta", "c":"pempek", "d":"jambi"}'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('soal_ist', null, {});    
  }
};
