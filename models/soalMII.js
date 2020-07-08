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
        const rawValue = this.getDataValue('pilihan')
        return rawValue? rawValue.split("|") : null
      },
      set(value) {
        this.setDataValue('pilihan', value.join("|"))
      }
    }
  }, {
    tableName: 'soal_mii',
    timestamps: false,
  });
  
  return soalMII;
};