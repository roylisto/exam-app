'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('peserta', [{      
      email: 'jhon@gmail.com',
      password: '12345678',
            
    }, {
      email: 'syadeins@gmail.com',
      password: '87654321',
            
    }, {
      email: 'bebas@gmail.com',
      password: '12341234',     
    }, {
      email: 'anasaya@gmail.com',
      password: '43214321',
            
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('peserta', null, {});
  }
};
