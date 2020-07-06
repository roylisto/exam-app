const { waktuSoal, logSoalPeserta } = require('../models/index.js');
const moment = require('moment');
moment.tz.setDefault("Asia/Jakarta");
moment.defaultFormat = "YYYY-MM-DD HH:mm:ss";

module.exports = {
  get: async (req, res) => {
    
    try {
      let {
        jenis_soal,
        paket_soal,
        peserta_id
      } = req.params

      const last_log = await logSoalPeserta.findOne({
        order: [['created_at', 'DESC']],
        where: {
          jenis_soal: jenis_soal,
          paket_soal: paket_soal,
          peserta_id: peserta_id
        }
      });
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
            waktu: waktu_soal.waktu*60 //convert menit ke detik
          }
        })
      } else {
        const last_time = moment(last_log.created_at);
        const now = moment(new Date());
        const sisa_waktu = (waktu_soal.waktu*60)-now.diff(last_time, 'seconds');
        if(sisa_waktu < 0) {
          res.json({
            status: 'OK',
            messages: 'sesi waktu untuk jenis dan subtes ini telah habis',
            data: {
              waktu: null
            }
          })
        } else {
          res.json({
            status: 'OK',
            messages: '',
            data: {          
              waktu: sisa_waktu
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