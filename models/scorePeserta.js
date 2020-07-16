'use strict';
module.exports = (sequelize, DataTypes) => {
  const scorePeserta = sequelize.define('scorePeserta', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    kode_soal: DataTypes.STRING,
    rw: DataTypes.INTEGER,
    sw: DataTypes.INTEGER,
    kategori: DataTypes.STRING,
    peserta_id: DataTypes.INTEGER
  }, {
    tableName: 'score_peserta',
    timestamps: false,
  });
  scorePeserta.associate = function(models) {
    // associations can be defined here
  };
  return scorePeserta;
};