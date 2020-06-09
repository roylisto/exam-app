const model = require('../models/index.js');

exports.findAll = (req, res) => {
  model.User.findAll().then(user => {
      res.json({
          'status': 'OK',
          'messages': '',
          'data': user
      });
  }).catch(err => {
      res.json({
          'status': 'ERROR',
          'messages': err,
          'data': {}
      }); 
  });
}