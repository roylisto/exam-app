const { peserta } = require('../models/index.js');
const md5 = require('md5');
module.exports = {
  list: (req, res) => {
    peserta.findAll().then( pserta => {
      res.json({
          status: 'OK',
          messages: '',
          data: pserta
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
    peserta.findOne({
      where: { id: req.params.id }
    }).then( pserta => {      
      if( pserta === null ) {
        return res.status(404).json({
          status: 'ERROR',
          messages: 'Resource Not Found!',
          data: {}
        });
      }
      res.json({
        status: 'OK',
        messages: '',
        data: pserta
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
    let { email, valid, expired, jadwal_test } = req.body
    let password = md5(email+valid+new Date()).slice(0,8);
    
    peserta.create({
      email: email,
      password: password,
      valid: valid,
      expired: expired,
      jadwal_test: jadwal_test
    }).then( pserta => {
      res.json({
        status: 'OK',
        messages: 'Success insert data.',
        data: pserta
      });
    }).catch( err => {
      res.status(400).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    });
  },

  createBulk: (req, res) => {
    let calon_peserta = req.body
    if(Array.isArray(calon_peserta)) {
      let data = []
      calon_peserta.map( (value, index) => {
        return data.push({
          email: value.email,
          password: md5(value.email+value.valid+new Date()).slice(0,8),
          valid: value.valid,
          expired: value.expired,
          jadwal_test: value.jadwal_test
        });
      });
      peserta.bulkCreate(data)
      .then( ()=> {
        res.json({
          status: 'OK',
          messages: 'Success insert data.',
          data: {}
        });
      }).catch( err => {
        res.status(400).json({
          status: 'ERROR',
          messages: err,
          data: {}
        });
      });
    } else {
      res.status(400).json({
        status: 'ERROR',
        messages: 'Bad Request!',
        data: {}
      });
    }    
  },

  update: (req, res) => {
    let { email, valid, expired, jadwal_test, password } = req.body
    peserta.update({
      email: email,
      password: password,
      valid: valid,
      expired: expired,
      jadwal_test: jadwal_test
    }, {
      where: {
        id: req.params.id
      }
    }).then( pserta => {
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
    }).catch( err => {
      res.status(400).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    });
  },

  delete: (req, res) => {
    peserta.destroy({
      where: {
        id: req.params.id
      }
    }).then( pserta => {
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