const { jawaban } = require('../models/index.js');

module.exports = {
  store: (req, res) => {    
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
        'subtest 1 ist', 'subtest 2 ist', 'subtest 3 ist', 'subtest 4 ist', 'subtest 5 ist',
        'subtest 6 ist', 'subtest 7 ist', 'subtest 8 ist', 'subtest 9 ist',
        'Bagian 1 Verb Ling', 'Bagian 2 Log-Math', 'Bagian 3 Spat', 'Bagian 4 Mus',
        'Bagian 5 Bod-Kin', 'Bagian 6 Inter', 'Bagian 7 Intra', 'Bagian 8 Nat'
      ];

      const jawaban_user = await jawaban.findAll({where: {
        peserta_id: req.params.peserta_id
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