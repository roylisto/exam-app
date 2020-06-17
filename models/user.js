'use strict';
module.exports = function(sequelize, DataTypes) {
  let user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    no_hp: {
      allowNull: false,
      type: DataTypes.STRING
    },
    instansi: {      
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {    
    tableName: 'user',    
    underscored: true,
    timestamps: true,  
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true
  });

  return user;
};