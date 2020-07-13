const { jawaban, logSoalPeserta, waktuSoal } = require('../models/index.js');
const moment = require('moment');
moment.tz.setDefault("Asia/Jakarta");
moment.defaultFormat = "YYYY-MM-DD HH:mm:ss";

module.exports = {
  store: (req, res) => {
    req.body.peserta_id = req.decoded.data.id    
    jawaban.create(req.body).then(result => {
      res.json({
        status: 'OK',
        messages: 'Success insert data.',
        data: result
      });
    }).catch(err => {
      res.status(400).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    });
  },
  list: async (req, res) => {
    try {      
      const all_soal = [
        "subtest_1_ist", "subtest_2_ist", "subtest_3_ist", "subtest_4_ist", "subtest_5_ist",
        "subtest_6_ist", "subtest_7_ist", "subtest_8_ist", "subtest_9_ist",
        "bagian_1_verb_ling", "bagian_2_log_math", "bagian_3_spat", "bagian_4_mus", "bagian_5_bod_kin",
        "bagian_6_inter", "bagian_7_intra", "bagian_8_nat"
      ];
      
      const jawaban_user = await jawaban.findAll({where: {
        peserta_id: req.decoded.data.id
      }});
      
      const log_peserta = await logSoalPeserta.findAll({            
        where: {         
          peserta_id: req.decoded.data.id
        }
      });

      let check_test = [];
      let log_test_peserta = {};
      const log_jawaban_user = jawaban_user.map(row => row.paket_soal);
      
      log_peserta.forEach(row => {
        log_test_peserta[row.paket_soal] = row.created_at;
      });
            
      let index = 0;
      let status_test = 'Sudah';
      const now = moment(new Date());
      for (const element of all_soal) {
        
        let jenis_soal = (index<9) ? 'ist': 'mii'; 
        index++;
        
        let tmp_status = log_jawaban_user.includes(element);        
        if(tmp_status===false) {
          console.log("element: ",element)
          if(log_test_peserta[element]==null) {
            status_test = 'Belum';
          } else {
            let waktu_soal = await waktuSoal.findOne({
              where: {
                jenis_soal: jenis_soal,
                paket_soal: element
              }
            });
            const last_time = moment(log_test_peserta[element]);
            const waktu_pengerjaan = now.diff(last_time, 'seconds');
            
            status_test = (waktu_pengerjaan > waktu_soal.waktu) ? 'Waktu habis' : 'Sedang dikerjakan';
          }
        } else {
          status_test = 'Sudah';
        }

        check_test.push({
          jenis: jenis_soal,
          test: element,
          status: status_test
        });
      }

      res.json({
        status: 'OK',
        messages: '',
        data: check_test
      });
    } catch (err) {
      res.status(500).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    }
  }
}