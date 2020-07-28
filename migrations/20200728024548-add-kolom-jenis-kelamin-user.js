'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('user', 'jenis_kelamin', { type: Sequelize.STRING })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('user', 'jenis_kelamin', {})
    ]);
  }
};
