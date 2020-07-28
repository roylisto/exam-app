const { user, peserta, jadwalTest } = require('../models/index.js');
const Excel = require('exceljs');
const randomstring = require("randomstring");
const moment = require('moment');

module.exports = {
  import: async (req, res) => {    
    try {      
      const { jadwal_test } = req.body;
      const test = await jadwalTest.findByPk(jadwal_test);      
      if(jadwal_test && test==null) {
        return res.status(404).json({
          status: 'ERROR',
          messages: 'Jadwal test not found!',
          data: {}
        });
      }
      const workbook = new Excel.Workbook();
      await workbook.xlsx.readFile(req.file.path);
      const worksheet = workbook.worksheets[0];
      worksheet.eachRow(function(row, rowNumber) {
        if(rowNumber > 1) {
          const data = {
            nama: row.values[2],
            email: row.values[3],
            no_hp: row.values[4],
            tanggal_lahir: moment(row.values[5]).format('YYYY-MM-DD'),
            jenis_kelamin: row.values[6],
            kelompok: row.values[7],
            instansi: row.values[8]
          };
          
          user.create(data).then(calon_peserta => {            
            if(test) {
              peserta.create({
                email: calon_peserta.email,
                password: randomstring.generate(8),
                valid: test.waktu,
                expired: moment(test.waktu).add(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
                jadwal_test: jadwal_test
              }).then(result => {
                return result;
              });
            }
          }).catch(err => {
          });          
        }        
      });      

      return res.json({
        status: 'OK',
        messages: 'Success insert data.',
        data: {}
      });
    } catch (err) {
      res.status(500).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    }
  },

  list: (req, res) => {
    user.findAll().then( users => {
      res.json({
          status: 'OK',
          messages: '',
          data: users
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
    user.findOne({
      where: { id: req.params.id }
    }).then( users => {      
      if( users === null ) {
        return res.status(404).json({
          status: 'ERROR',
          messages: 'Resource Not Found!',
          data: {}
        });
      }
      res.json({
        status: 'OK',
        messages: '',
        data: users
      });
    }).catch( err => {
      res.status(500).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    });
  },

  create: (req, res) => {
    let { nama, email, no_hp, tanggal_lahir, kelompok, instansi } = req.body
    user.create({
      nama: nama,
      email: email,
      no_hp: no_hp,
      tanggal_lahir: tanggal_lahir,
      jenis_kelamin: jenis_kelamin,
      kelompok: kelompok,
      instansi: instansi
    }).then( users => {
      res.json({
        status: 'OK',
        messages: 'Success insert data.',
        data: users
      });
    }).catch( err => {
      res.status(400).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    });
  },

  update: (req, res) => {
    let { nama, email, no_hp, tanggal_lahir, kelompok, instansi } = req.body
    user.update({
      nama: nama,
      email: email,
      no_hp: no_hp,
      tanggal_lahir: tanggal_lahir,
      jenis_kelamin: jenis_kelamin,
      kelompok: kelompok,
      instansi: instansi
    }, {
      where: {
        id: req.params.id
      }
    }).then( users => {
      res.json({
        status: 'OK',
        messages: 'Success update data.',
        data: {
          id: req.params.id,
          nama: nama,
          email: email,
          no_hp: no_hp,
          tanggal_lahir: tanggal_lahir,
          jenis_kelamin: jenis_kelamin,
          kelompok: kelompok,
          instansi: instansi
        }
      });
    }).catch( err => {
      res.status(400).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    });
  },

  delete: (req, res) => {
    user.destroy({
      where: {
        id: req.params.id
      }
    }).then( users => {
      res.json({
        status: 'OK',
        messages: 'Success delete data.',
        data: {}
      });
    }).catch( err => {
      res.status(500).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    });
  }
}