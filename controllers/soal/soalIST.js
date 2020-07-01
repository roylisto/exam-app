const { soalIST } = require('../../models/index.js');

module.exports = {
  list: async (req, res) => {
    try {
      const soal = await soalIST.findAll({
        where: req.query,      
      });

      if(soal.length==1) {
        const isFirst = await soalIST.min('nomor', {where: {paket_soal: req.query.paket_soal}})
          .then(min => {
            if(min==soal[0].nomor) { return true; } 
            else { return false; }
          });
        const isLast = await soalIST.max('nomor', {where: {paket_soal: req.query.paket_soal}})
          .then(max => {
            if(max==soal[0].nomor) { return true; } 
            else { return false; }
          });
        res.json({
          status: 'OK',
          messages: '',
          data: soal[0],
          isFirst: isFirst,
          isLast: isLast
        });
      } else {
        res.json({
          status: 'OK',
          messages: '',
          data: soal
        });
      }
    } catch (err) {
      res.status(400).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    }
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