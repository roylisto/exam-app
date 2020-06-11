const { user } = require('../models/index.js');

module.exports = {
  findAll : (req, res) => {
    user.findAll().then(user => {
      res.json({
          'status': 'OK',
          'messages': '',
          'data': user
      });
    }).catch(err => {
      res.status(500).json({
          'status': 'ERROR',
          'messages': err,
          'data': {}
      }); 
    });
  }
}