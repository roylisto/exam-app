const { soalMII } = require('../../models/index.js');

module.exports = {
  list: (req, res) => {
    soalMII.findAll({
      where: req.query
    }).then( result => {
      res.json({
        status: 'OK',
        messages: '',
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

  get: (req, res) => {
    soalMII.findOne({
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
      paket_soal,
      pertanyaan,
      pilihan
    } = req.body    

    soalMII.create({
      nomor: nomor, 
      paket_soal: paket_soal,
      pertanyaan: pertanyaan,
      pilihan: pilihan
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
      paket_soal,
      pertanyaan,
      pilihan
    } = req.body
    soalMII.update({
      nomor: nomor, 
      paket_soal: paket_soal,
      pertanyaan: pertanyaan,
      pilihan: pilihan
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
          paket_soal: paket_soal,
          pertanyaan: pertanyaan,
          pilihan: pilihan
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
    soalMII.destroy({
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