'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('peserta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {        
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      valid: {        
        type: Sequelize.DATE
      },
      expired: {        
        type: Sequelize.DATE
      },
      score: {        
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      jadwal_test: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('peserta');
  }
};
