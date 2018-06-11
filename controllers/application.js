// render the homepage
const { Comment, Image  } = require('../models/Image');

module.exports = {
    index: (req, res) => {
        res.render('app/index')
    }
}

