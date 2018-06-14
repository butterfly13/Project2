const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');

router.get('/signin', userController.signin);
router.post('/signin', userController.createSignin);
router.get('/:id', userController.show);

module.exports = router;