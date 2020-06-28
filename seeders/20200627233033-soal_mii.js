'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('soal_mii', [{
        nomor: 1,
        paket_soal: "Bagian 1 Verb Ling",
        pilihan: '["ya", "tidak"]',
        pertanyaan: "saya senang bermain dengan menggunakan kata-kata, misalnya membuat pantun/sajak."
      }, {
        nomor: 2,
        paket_soal: "Bagian 1 Verb Ling",
        pilihan: '["ya", "tidak"]',
        pertanyaan: "saya senang bermain dengan menggunakan kata-kata, misalnya membuat tulisan."
      }, {
        nomor: 1,
        paket_soal: "Bagian 2 Log",
        pilihan: '["ya", "tidak"]',
        pertanyaan: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum."
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('soal_mii', null, {});
  }
};
