const { user } = require('../models/index.js');

module.exports = {
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
    let { nama, email, no_hp, umur, instansi } = req.body
    user.create({
      nama: nama,
      email: email,
      no_hp: no_hp,
      umur: umur,
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
    let { nama, email, no_hp, umur, instansi } = req.body
    user.update({
      nama: nama,
      email: email,
      no_hp: no_hp,
      umur: umur,
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