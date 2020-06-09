'use strict';
module.exports = function(sequelize, DataTypes) {
  let user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE
    },
    updated_at: {      
      type: DataTypes.DATE
    },
  }, {    
    tableName: 'user',
    underscored: true,
  });

  return user;
};