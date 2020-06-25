const router = require('express').Router();
const user = require('../controllers/user.js');
const auth = require('../controllers/auth.js');
const peserta = require('../controllers/peserta.js');
const soal_ist = require('../controllers/soal/soal_ist.js');
//users route
router.get('/users', user.list);
router.get('/users/:id', user.get);
router.post('/users', user.create);
router.put('/users/:id', user.update);
router.delete('/users/:id', user.delete);

//peserta route
router.get('/peserta', peserta.list);
router.get('/peserta/:id', peserta.get);
router.post('/peserta', peserta.create);
router.post('/peserta/bulk', peserta.createBulk);
router.put('/peserta/:id', peserta.update);
router.delete('/peserta/:id', peserta.delete);

//soal_ist route
router.get('/soal/ist', soal_ist.list);
router.get('/soal/ist/:id', soal_ist.get);

router.post('/auth', auth.login);
module.exports = router;
