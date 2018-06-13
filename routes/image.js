const express = require('express');
const router = express.Router();
const imageController = require('../controllers/image.js');

router.get('/', imageController.index);
router.get('/:id', imageController.show);
router.get('/new', imageController.new);
router.post('/', imageController.create);

module.exports = router;