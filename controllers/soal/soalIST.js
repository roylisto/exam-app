const { soalIST } = require('../../models/index.js');

module.exports = {
  list: (req, res) => {
    soalIST.findAll({
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
    soalIST.findOne({
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
      nomor,
      kategori,
      paket_soal,
      pertanyaan,
      kunci_jawaban,
      pilihan,
      waktu
    } = req.body    

    soalIST.create({
      nomor: nomor,
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
      nomor,
      kategori,
      paket_soal,
      pertanyaan,
      kunci_jawaban,
      pilihan,
      waktu
    } = req.body
    soalIST.update({
      nomor: nomor,
      kategori: kategori,
      paket_soal: paket_soal,
      pertanyaan: pertanyaan,
      kunci_jawaban: kunci_jawaban,
      pilihan: pilihan,
      waktu: waktu
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
          nomor: nomor,
          kategori: kategori,
          paket_soal: paket_soal,
          pertanyaan: pertanyaan,
          kunci_jawaban: kunci_jawaban,
          pilihan: pilihan,
          waktu: waktu
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
    soalIST.destroy({
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