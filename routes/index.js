const router = require('express').Router();
const user = require('../controllers/user.js');
const auth = require('../controllers/auth.js');
const peserta = require('../controllers/peserta.js');
const soalIST = require('../controllers/soal/soalIST.js');
const soalMII = require('../controllers/soal/soalMII.js');
const time = require('../controllers/timeController.js');
const jawaban = require('../controllers/jawaban.js');
const jadwalTest = require('../controllers/jadwalTest.js');
const hasil = require('../controllers/hasil.js');
const authorize = require('../middlewares/authorize.js');
//etc: api/time/ist/subtest1/3
router.get('/time/:jenis_soal', authorize(), time.get);

//jawaban route
router.post('/jawaban', authorize(), jawaban.store);
router.get('/rincian-test', authorize(), jawaban.list);
router.get('/rincian-test/reset/:pesertaId', authorize(), jawaban.reset);
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
router.delete('/peserta/:id', peserta.delete);

//soal_IST route
router.get('/soal/ist', authorize(), soalIST.list);
router.get('/soal/ist/:id', authorize(), soalIST.get);

//soal_MII route
router.get('/soal/mii', authorize(), soalMII.list);
router.get('/soal/mii/:id', authorize(), soalMII.get);

//route jadwal test
router.get('/jadwal-test', jadwalTest.list);
router.get('/jadwal-test/:id', jadwalTest.get);
router.post('/jadwal-test', jadwalTest.create);
router.put('/jadwal-test/:id', jadwalTest.update);
router.delete('/jadwal-test/:id', jadwalTest.delete);

//route hasil
router.get('/hasil-test/:id', hasil.list);
router.post('/auth', auth.login);
module.exports = router;
