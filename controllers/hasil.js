const db = require('../models/index.js');
const moment = require('moment');
moment.tz.setDefault("Asia/Jakarta");
moment.defaultFormat = "YYYY-MM-DD HH:mm:ss";

module.exports = {
  list: async (req, res) => {
    const now = moment(new Date());
    let peserta = await db.peserta.findAll({
      where: {
        jadwal_test: req.params.id
      }, 
      // include: db.scorePeserta,
      raw: true,
      nest: true
    });

    for(let i=0; i<peserta.length; i++) {
      peserta[i].scorePeserta = await db.scorePeserta.findAll({
        where: {
          peserta_id: peserta[i].id
        }
      });

      let tanggal_lahir = await db.user.findOne({
        where: {
          email: peserta[i].email
        }
      }).then(result => result.tanggal_lahir);
      
      let umur = now.diff(tanggal_lahir, 'years');

      if(umur>18 && umur<=20) {
        umur = 20;
      } else if(umur <= 24) {
        umur = 24;
      } else if(umur <= 28) {
        umur = 28;
      } else if(umur <= 33) {
        umur = 33;
      } else if(umur <= 39) {
        umur = 39;
      } else if(umur <= 45) {
        umur = 45;
      } else if(umur >= 46) {
        umur = 46;
      }
      
      peserta[i].iq = await db.scorePeserta.getIQ(peserta[i].id, umur);
    }
    
    return res.json(peserta);
    
  }
}