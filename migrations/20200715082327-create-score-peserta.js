'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('score_peserta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kode_soal: {
        type: Sequelize.STRING
      },
      rw: {
        type: Sequelize.INTEGER
      },
      sw: {
        type: Sequelize.DECIMAL(3, 1)
      },
      kategori: {
        type: Sequelize.STRING
      },
      peserta_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('score_peserta');
  }
};