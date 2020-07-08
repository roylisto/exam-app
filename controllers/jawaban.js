const { jawaban } = require('../models/index.js');

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
      
      all_soal.forEach((element, index) => {
        let tmp_status = log_jawaban_user.includes(element);
        let jenis_soal = (index<9) ? 'ist': 'mii'; 
        check_test.push({
          jenis: jenis_soal,
          test: element,
          status: tmp_status? 'Selesai':'Belum'
        });
      });

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