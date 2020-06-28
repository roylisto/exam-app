'use strict';
module.exports = (sequelize, DataTypes) => {
  const soalMII = sequelize.define('soalMII', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nomor: DataTypes.INTEGER,
    paket_soal: DataTypes.STRING,
    pertanyaan: DataTypes.TEXT,
    pilihan: {
      type: DataTypes.STRING,
      get() {
        let rawValue = this.getDataValue('pilihan')
        return rawValue? JSON.parse(rawValue) : null
      }
    }
  }, {
    tableName: 'soal_mii',
    timestamps: false,
  });
  
  return soalMII;
};