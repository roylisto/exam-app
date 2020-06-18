const router = require('express').Router();
const user = require('../controllers/user.js');
const auth = require('../controllers/auth.js');

//users route
router.get('/users', user.list);
router.get('/users/:id', user.get);
router.post('/users', user.create);
router.put('/users/:id', user.update);
router.delete('/users/:id', user.delete);

router.post('/auth', auth.login);
module.exports = router;
