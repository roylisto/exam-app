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
        "Bagian_1_Verb_Ling", "Bagian_2_Log-Math", "Bagian_3_Spat", "Bagian_4_Mus", "Bagian_5_Bod-Kin",
        "Bagian_6_Inter", "Bagian_7_Intra", "Bagian_8_Nat"
      ];
      
      const jawaban_user = await jawaban.findAll({where: {
        peserta_id: req.decoded.data.id
      }});
      
      let check_test = [];
      const log_jawaban_user = jawaban_user.map(row => row.paket_soal);
      
      all_soal.forEach(element => {
        let tmp_status = log_jawaban_user.includes(element);
        check_test.push({
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