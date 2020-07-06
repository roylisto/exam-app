const router = require('express').Router();
const user = require('../controllers/user.js');
const auth = require('../controllers/auth.js');
const peserta = require('../controllers/peserta.js');
const soalIST = require('../controllers/soal/soalIST.js');
const soalMII = require('../controllers/soal/soalMII.js');
const time = require('../controllers/timeController.js');
const jawaban = require('../controllers/jawaban.js');
//etc: api/time/ist/subtest1/3
router.get('/time/:jenis_soal/:paket_soal/:peserta_id', time.get);

//jawaban route
router.post('/jawaban', jawaban.store);
router.get('/rincian-test/:peserta_id', jawaban.list);
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

//soal_IST route
router.get('/soal/ist', soalIST.list);
router.get('/soal/ist/:id', soalIST.get);

//soal_MII route
router.get('/soal/mii', soalMII.list);
router.get('/soal/mii/:id', soalMII.get);

router.post('/auth', auth.login);
module.exports = router;
