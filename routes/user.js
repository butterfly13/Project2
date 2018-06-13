const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');

router.get('/new', userController.new);
router.post('/', userController.create);
router.get('/:id', userController.show);

module.exports = router;