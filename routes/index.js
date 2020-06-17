const router = require('express').Router();
const user = require('../controllers/user.js');
const auth = require('../controllers/auth.js');

router.get('/users', user.findAll);
router.post('/auth', auth.login);
module.exports = router;
