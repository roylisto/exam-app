'use strict';
module.exports = function(sequelize, DataTypes) {
  let peserta = sequelize.define('peserta', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {        
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue('email', value.toLowerCase())
      }
    },
    password: {
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue('password', value.toUpperCase())
      }
    },
    valid: {        
      type: DataTypes.DATE,
    },
    expired: {        
      type: DataTypes.DATE
    },
    jadwal_test: {
      type: DataTypes.INTEGER
    },
    jenis_test: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('jenis_test')
        return rawValue? rawValue.split(',') : null
      },
      set(value) {
        this.setDataValue('jenis_test', value.join(","))
      }
    }
  }, {    
    tableName: 'peserta',
    underscored: true,
    timestamps: false,
  });
  peserta.associate = function(models) {
    peserta.hasMany(models.scorePeserta, {
      foreignKey: 'peserta_id'
    });
  };
  return peserta;
};