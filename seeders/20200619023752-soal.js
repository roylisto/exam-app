'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('soal', [{
        kategori: 'pilgan4',
        paket_soal: 'subtest1',
        pertanyaan: 'test soal no 1 subtest1?',
        kunci_jawaban: 'a',
        pilihan: '{"a":"bandung", "b":"jakarta", "c":"palembang", "d":"jambi"}',
        waktu: 7 //7 menit
      }, {
        kategori: 'pilgan2',
        paket_soal: 'subtest1',
        pertanyaan: 'test soal no 2 subtest3?',
        kunci_jawaban: 'a',
        pilihan: '{"a":"motor", "b":"mobil"}',
        waktu: 5 //7 menit
      }, {
        kategori: 'gambar4',
        paket_soal: 'subtest5',
        pertanyaan: 'test soal no 1 subtest5?',
        kunci_jawaban: 'd',
        pilihan: '{"a":"bandung.jpg", "b":"jakarta.jpg", "c":"palembang.jpg", "d":"jambi.jpg"}',
        waktu: 7 //7 menit
      }, {
        kategori: 'nosoal4',
        paket_soal: 'subtest6',
        pertanyaan: null,
        kunci_jawaban: 'c',
        pilihan: '{"a":"bandung", "b":"jakarta", "c":"pempek", "d":"jambi"}',
        waktu: 7 //7 menit
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});    
  }
};
