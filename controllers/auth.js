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
        const userPeserta = await user.findOne({
          attributes: ['nama'],
          where: {email:peserta.email}
        });
        
        let credential = {
          "id": peserta.id,
          "nama": userPeserta.nama,
          "email": peserta.email,
          "valid": peserta.valid,
          "expired": peserta.expired,
          "id_test": test.id,
          "waktu": test.waktu,
          "expired_test": test.expired,
          "instansi": test.instansi,
          "keterangan": test.keterangan,
          "jenis_test": peserta.jenis_test
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