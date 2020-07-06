const { jawaban } = require('../models/index.js');

module.exports = {
  store: (req, res) => {    
    jawaban.create(req.body).then(result => {
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
  }
}