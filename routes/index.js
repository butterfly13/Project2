const express = require('express');
const router = express.Router();

router.use('/', require('./application'));
router.use('/user', require('./user'));
router.use('/image', require('./image'));

module.exports = router;