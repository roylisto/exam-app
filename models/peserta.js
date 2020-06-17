'use strict';
module.exports = function(sequelize, DataTypes) {
  let peserta = sequelize.define('peserta', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {        
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    valid: {        
      type: DataTypes.DATE
    },
    expired: {        
      type: DataTypes.DATE
    },
    score: {        
      type: DataTypes.FLOAT
    },
    jadwal_test: {
      type: DataTypes.INTEGER
    }
  }, {    
    tableName: 'peserta',
    underscored: true,
    timestamps: false,
  });

  return peserta;
};