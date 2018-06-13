const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/share_image');
mongoose.Promise = Promise;
module.exports = mongoose;