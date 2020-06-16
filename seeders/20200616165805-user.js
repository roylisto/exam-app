'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [{
      nama: 'John Doe',
      email: 'jhon@gmail.com',
      no_hp: '085758612442',
      instansi: 'unsri ilkom'      
    }, {
      nama: 'irsyad eins',
      email: 'syadeins@gmail.com',
      no_hp: '085758612443',
      instansi: 'unsri ilkom'      
    }, {
      nama: 'sultan',
      email: 'bebas@gmail.com',
      no_hp: '089958612463',
      instansi: 'binadarma'      
    }, {
      nama: 'ana wula',
      email: 'anasaya@gmail.com',
      no_hp: '085758619999',
      instansi: 'unsri ilkom'      
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
