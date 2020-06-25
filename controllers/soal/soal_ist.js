const { soal_ist } = require('../../models/index.js');

module.exports = {
  list: (req, res) => {
    soal_ist.findAll({
      where: req.query
    }).then( result => {
      res.json({
          status: 'OK',
          messages: '',
          data: result
      });
    }).catch(err => {
      res.status(500).json({
          status: 'ERROR',
          messages: err,
          data: {}
      }); 
    });
  },

  get: (req, res) => {
    soal_ist.findOne({
      where: {
        id: req.params.id
      }
    }).then(result => {
      if (result === null) {
        return res.status(404).json({
          status: 'ERROR',
          messages: 'Resource Not Found!',
          data: {}
        });
      }
      res.json({
        status: 'OK',
        messages: '',
        data: result
      });
    }).catch(err => {
      res.status(500).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    });
  },

  create: (req, res) => {
    let {
      kategori,
      paket_soal_ist,
      pertanyaan,
      kunci_jawaban,
      pilihan,
      waktu
    } = req.body    

    soal_ist.create({
      kategori: kategori,
      paket_soal_ist: paket_soal_ist,
      pertanyaan: pertanyaan,
      kunci_jawaban: kunci_jawaban,
      pilihan: pilihan,
      waktu: waktu
    }).then(result => {
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

  update: (req, res) => {
    let {
      email,
      valid,
      expired,
      jadwal_test,
      password
    } = req.body
    soal_ist.update({
      email: email,
      password: password,
      valid: valid,
      expired: expired,
      jadwal_test: jadwal_test
    }, {
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.json({
        status: 'OK',
        messages: 'Success update data.',
        data: {
          id: req.params.id,
          email: email,
          password: password,
          valid: valid,
          expired: expired,
          jadwal_test: jadwal_test
        }
      });
    }).catch(err => {
      res.status(400).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    });
  },

  delete: (req, res) => {
    soal_ist.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.json({
        status: 'OK',
        messages: 'Success delete data.',
        data: {}
      });
    }).catch(err => {
      res.status(500).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    });
  }
}