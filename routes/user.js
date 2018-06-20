const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');

router.get('/signin', userController.signin);
router.post('/signin', userController.createSignin);
router.get('/signup', userController.signup);
router.post('/signup', userController.createSignup);
router.get('/signout', userController.signout);
router.get('/index', userController.index);
router.get('/:id', userController.show);

module.exports = router;