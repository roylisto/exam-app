'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('jadwal_test', [{
        waktu: new Date(),
        instansi: 'sma 1 gelumbang'
      }, {
        waktu: new Date(),
        instansi: 'sma 1 aceh'
      }, {
        waktu: new Date(),
        instansi: 'sma 5 sulsel'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jadwal_test', null, {});
  }
};
