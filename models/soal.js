'use strict';
module.exports = function(sequelize, DataTypes) {
  let soal = sequelize.define('soal', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    kategori: {        
      type: DataTypes.STRING
    },
    paket_soal: {
      type: DataTypes.STRING
    },
    pertanyaan: {        
      type: DataTypes.TEXT
    },
    kunci_jawaban: {        
      type: DataTypes.STRING
    },
    pilihan: {        
      type: DataTypes.TEXT,
      get() {
        const rawValue = this.getDataValue(pilihan)
        return rawValue? JSON.parse(rawValue) : null
      }
    },
    waktu: {
      type: DataTypes.INTEGER
    }
  }, {    
    tableName: 'soal',
    underscored: true,
    timestamps: false,
  });

  return soal;
};