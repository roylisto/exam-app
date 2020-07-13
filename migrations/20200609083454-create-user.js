'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      email: {        
        type: Sequelize.STRING
      },
      no_hp: {
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        type: Sequelize.DATEONLY
      },
      kelompok: {        
        type: Sequelize.STRING
      },
      instansi: {        
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};