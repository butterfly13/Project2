const mongoose = require('mongoose');
mongoose.connevt('mongodb://localhost/pictureShare');
mongoose.Promise = Promise;
module.exports = mongoose;