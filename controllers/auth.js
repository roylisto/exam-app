const { peserta, jadwalTest, user } = require('../models/index.js');
const jwt = require('jsonwebtoken');
const moment = require('moment');

module.exports = {
  login: (req, res) => {
    let { email, password } = req.body
    let today = moment().format('YYYY-MM-DD HH:mm:ss');

    peserta.findOne({
      where: {
        email: email,
        password: password
      }
    }).then(async peserta => {
      let valid = moment(today).isSameOrAfter(peserta.valid);
      let expired = moment(today).isSameOrBefore(peserta.expired);

      if(process.env.NODE_ENV == 'development') {
        valid = true;
        expired = true;
      }

      if(peserta && valid==true && expired==true) {
        const test = await jadwalTest.findByPk(peserta.jadwal_test);
        const user_peserta = await user.findOne({attributes: ['nama']},{where: {email:peserta.email}});

        let credential = {
          "id": peserta.id,
          "nama": user_peserta.nama,
          "email": peserta.email,
          "valid": peserta.valid,
          "expired": peserta.expired,
          "waktu": test.waktu,
          "instansi": test.instansi
        }
        //sign token for 12 hour
        jwt.sign({ data:credential }, process.env.JWT_SECRET, { algorithm:'HS256', expiresIn:'12h' }, (error, token) => {
          res.json({
            status: 'OK',
            message: 'Login Success',
            data: {
              token: token
            }
          });
        });
      } else {
        res.status(500).json({
          status: 'ERROR',
          message: 'Username atau Password Salah!',
          data: {}
        });
      }
    }).catch (err => {
      res.status(500).json({
        status: 'ERROR',
        message: 'Bad Request!',
        data: err
      });
    });
  }
}