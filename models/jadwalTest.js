'use strict';
const moment = require('moment');
moment.tz.setDefault("Asia/Jakarta");
moment.defaultFormat = "YYYY-MM-DD HH:mm:ss";

module.exports = (sequelize, DataTypes) => {
  const jadwalTest = sequelize.define('jadwalTest', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    waktu: {
      type: DataTypes.DATE,
      get() {
        let rawValue = this.getDataValue('waktu')
        return rawValue? moment(rawValue).format() : null
      }
    },
    instansi: DataTypes.STRING
  }, {
    tableName: 'jadwal_test',
    underscored: true,
    timestamps: true
  });
  jadwalTest.associate = function(models) {
    // associations can be defined here
  };
  return jadwalTest;
};