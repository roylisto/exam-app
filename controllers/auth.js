const { peserta } = require('../models/index.js');
const jwt = require('jsonwebtoken');
// const { Op } = require('sequelize');
const moment = require('moment');
moment.defaultFormat = "YYYY-MM-DD HH:mm:ss";

module.exports = {
  login: (req, res) => {  
    let { email, password } = req.body 
    // let today = moment().format(); 
    // let tomorrow = moment().add(1, 'days').format();

    peserta.findOne({
      where: {
        email: email,
        password: password,
        // valid: {
        //   [Op.gte]: today
        // },
        // expired: {
        //   [Op.lte]: tomorrow
        // }
      }
    }).then(peserta => {
      if(peserta) {        
        //sign token for 12 hour
        jwt.sign({ data:peserta }, process.env.JWT_SECRET, { algorithm:'HS256', expiresIn:'12h' }, (error, token) => {        
          res.json({
            status: 'OK',
            message: 'Login Success',
            data: {
              token: token
            }
          });  
        });
      } else {
        res.status(401).json({
          status: 'ERROR',
          message: 'Username atau Password Salah!',
          data: {}
        });
      }
    }).catch (err => {      
      res.status(400).json({
        status: 'ERROR',
        message: 'Bad Request!',
        data: err
      });
    });
  }
}