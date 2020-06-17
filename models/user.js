'use strict';
module.exports = function(sequelize, DataTypes) {
  let user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    no_hp: {
      type: DataTypes.STRING
    },
    instansi: {      
      type: DataTypes.STRING
    }
  }, {    
    tableName: 'user',
    underscored: true,
    timestamps: false,
  });

  return user;
};