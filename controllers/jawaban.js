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
      
      let check_test = [];
      const log_jawaban_user = jawaban_user.map(row => row.paket_soal);
      let index = 0;
      for (const element of all_soal) {
        let jenis_soal = (index<9) ? 'ist': 'mii'; 
        index++;
        let status_test = 'Sudah';
        let tmp_status = log_jawaban_user.includes(element);
        if(tmp_status===false) {
          const last_log = await logSoalPeserta.findOne({
            order: [['created_at', 'DESC']],
            where: {
              jenis_soal: jenis_soal,
              paket_soal: element,
              peserta_id: req.decoded.data.id
            }
          });

          if(last_log===null) {
            status_test = 'Belum';
          } else {
            const waktu_soal = await waktuSoal.findOne({
              where: {
                jenis_soal: jenis_soal,
                paket_soal: element
              }
            });
            const last_time = moment(last_log.created_at);
            const now = moment(new Date());
            const sisa_waktu = (waktu_soal.waktu*60)-now.diff(last_time, 'seconds');
            status_test = (sisa_waktu < 1) ? 'Waktu habis' : 'Sedang dikerjakan';
          }
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