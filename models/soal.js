'use strict';
module.exports = (sequelize, DataTypes) => {
  const soal = sequelize.define('soal', {
    kategori: {
      DataTypes.STRING
    },
    paket_soal: {
      DataTypes.STRING
    },
    pertanyaan: {
      DataTypes.TEXT
    },
    kunci_jawaban: {
      DataTypes.STRING
    },
    pilihan: {
      DataTypes.TEXT,
      get: {
        const rawValue = this.getDataValue(pilihan);
        return rawValue? JSON.parse(rawValue) : null
      }
    },
    waktu: {
      DataTypes.INTEGER
    }
  }, {
    tableName: 'soal',
    underscored: true,
    timestamps: false,
  });
    
  return soal;
};