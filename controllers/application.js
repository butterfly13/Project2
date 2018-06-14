// render the homepage
const { Comment, Image  } = require('../models/Image');

module.exports = {
    //res.send('helloworld')
    index: (req, res) => {
        Image.find({})
            .sort({ dateCreated: -1 })
            .limit(10)
            .populate('author')
            .then(images => {
               // res.send('Hello World');
                res.render('app/index', { images })
            })    
    }
}

// module.exports = {
//     index: (req, res) => {
//         res.render('image/index');
//     }
// }

