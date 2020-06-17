const { peserta } = require('../models/index.js');
const jwt = require('jsonwebtoken');

module.exports = {
  login: async (req, res) => {  
    let { email, password } = req.body 
    console.log(email)     
    peserta.findOne({
      where: {
        email: email,
        password: password
      }
    }).then(peserta => {
      if(peserta === null) {
        res.status(401).json({
          status: 'ERROR',
          message: 'Username atau Password Salah!',
          data: {}
        });
      }
      
      //sign token for 24 hour
      jwt.sign({ data:peserta }, process.env.JWT_SECRET, { algorithm:'HS256', expiresIn:'24h' }, (err, token) => {        
        res.json({
          status: 'OK',
          message: 'Login Success',
          data: {
            token: token
          }
        });  
      });
    }).catch (err => {      
      res.status(400).json({
        status: 'ERROR',
        message: 'Bad Request!',
        data: err
      });
    });
  }
}