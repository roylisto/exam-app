const { soal } = require('../models/index.js');

module.exports = {
  list: (req, res) => {
    soal.findAll().then(result => {
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
    soal.findOne({
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
      paket_soal,
      pertanyaan,
      kunci_jawaban,
      pilihan,
      waktu
    } = req.body    

    soal.create({
      kategori: kategori,
      paket_soal: paket_soal,
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
    soal.update({
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
    soal.destroy({
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