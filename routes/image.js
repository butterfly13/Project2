const express = require('express');
const router = express.Router();
const imageController = require('../controllers/image.js');

router.get('/new', imageController.new);
router.post('/new', imageController.create);
router.get('/', imageController.index);
router.get('/:id', imageController.show);


module.exports = router;