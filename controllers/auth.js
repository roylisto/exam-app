const { peserta } = require('../models/index.js');

module.exports = {
  login: async (req, res) => {        
    peserta.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(peserta => {
      if(peserta === null) {
        res.status(401).json({
          status: 'ERROR',
          message: 'Username atau Password Salah!',
          data: {}
        });
      }

      res.json({
        status: 'OK',
        message: 'Login Success',
        data: {}
      });  
    }).catch (err => {      
      res.status(400).json({
        status: 'ERROR',
        message: 'Bad Request!',
        data: {}
      });
    });
  }
}