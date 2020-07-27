'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('jadwal_test', 'expired', { type: Sequelize.DATE }),
      queryInterface.addColumn('jadwal_test', 'keterangan', { type: Sequelize.STRING })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('jadwal_test', 'expired', {}),
      queryInterface.removeColumn('jadwal_test', 'keterangan', {}),
    ]);
  }
};
