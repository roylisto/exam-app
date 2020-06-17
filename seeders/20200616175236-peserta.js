'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('peserta', [{      
      email: 'jhon@gmail.com',
      password: '12345678',
      valid: new Date(),
      expired: new Date(),
      jadwal_test: 2
    }, {
      email: 'syadeins@gmail.com',
      password: '87654321',
      valid: new Date(),
      expired: new Date(),
      jadwal_test: 2
    }, {
      email: 'bebas@gmail.com',
      password: '12341234',     
      valid: new Date(),
      expired: new Date(),
      jadwal_test: 1
    }, {
      email: 'anasaya@gmail.com',
      password: '43214321',
      valid: new Date(),
      expired: new Date(),
      jadwal_test: 2
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('peserta', null, {});
  }
};
