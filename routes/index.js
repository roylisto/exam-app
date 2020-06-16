const router = require('express').Router();
const user = require('../controllers/user.js');

router.get('/users', user.findAll);
module.exports = router;
