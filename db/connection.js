const mongoose = require('mongoose');

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
  } else {
   // mongoose.connect("mongodb://localhost/whenpresident");
   mongoose.connect("mongodb://localhost/share_image");
  }

// mongoose.connect('mongodb://localhost/share_image');
mongoose.Promise = Promise;
module.exports = mongoose;