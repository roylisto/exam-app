const { waktuSoal, logSoalPeserta } = require('../models/index.js');
const moment = require('moment');
moment.tz.setDefault("Asia/Jakarta");
moment.defaultFormat = "YYYY-MM-DD HH:mm:ss";

module.exports = {
  get: async (req, res) => {
    
    try {
      let { jenis_soal } = req.params
      let { paket_soal } = req.query
      peserta_id = req.decoded.data.id
      
      let last_log = null;
      if(jenis_soal=='ist') {
        last_log = await logSoalPeserta.findOne({        
          where: {
            jenis_soal: jenis_soal,
            paket_soal: paket_soal,
            peserta_id: peserta_id
          }
        });
      } else {
        last_log = await logSoalPeserta.findOne({
          order: [['created_at', 'DESC']],        
          where: {
            jenis_soal: jenis_soal,
            peserta_id: peserta_id
          }
        });        
      }
      const waktu_soal = await waktuSoal.findOne({
        where: {
          jenis_soal: jenis_soal,
          paket_soal: paket_soal
        }
      });
      
      if(last_log===null) {
        logSoalPeserta.create({
          jenis_soal: jenis_soal,
          paket_soal: paket_soal,
          peserta_id: peserta_id
        });

        res.json({
          status: 'OK',
          messages: 'Create new log soal for this user',
          data: {          
            waktu: waktu_soal.waktu, //convert menit ke detik
            keterangan: (jenis_soal=='mii') ? 'primary' : null
          }
        })
      } else {
        if(jenis_soal=='mii') {
          logSoalPeserta.findOrCreate({
            where: {
              jenis_soal: jenis_soal,
              paket_soal: paket_soal,
              peserta_id: peserta_id
            },
            defaults: {
              jenis_soal: jenis_soal,
              paket_soal: paket_soal,
              peserta_id: peserta_id
            }
          });
        }

        const last_time = moment(last_log.created_at);
        const now = moment(new Date());
        const sisa_waktu = (waktu_soal.waktu)-now.diff(last_time, 'seconds');
        if(sisa_waktu < 0) {
          res.json({
            status: 'OK',
            messages: 'sesi waktu untuk jenis dan subtes ini telah habis',
            data: {
              waktu: null,
              keterangan: null
            }
          })
        } else {
          res.json({
            status: 'OK',
            messages: '',
            data: {          
              waktu: sisa_waktu,
              keterangan: (jenis_soal=='mii') ? ((sisa_waktu < 900) ? 'secondary' : 'primary') : null
            }
          });
        }
      }
    } catch (err) {
      res.status(500).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    }
  }
}