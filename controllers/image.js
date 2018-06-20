const User = require('../models/User')
const {Image, Comment} = require('../models/Image')

module.exports = {

 
  // show all images
  index: (req, res) => {
    Image.find({})
      .sort({ dateCreated: -1 })
      .limit(10)
      .populate('author')
      .then(images => {
        // res.send('Hello World');
        res.render('image/index', { images })
      })

    // res.render('image/index');
  },
  // show single image
  show: (req, res) => {
    Image.findOne({_id: req.params.id})
      .populate('author')
      .then(images => {
        res.render('image/show', { images })
      })
    // res.render('image/show');
  },
  // GET form for add new image
  new: (req, res) => {
    res.render('image/new')
  },
  // // POST form 
  create: (req, res) => {

    // const url = req.body.url
    // const desc = req.body.desc
    
    // Create new image
    Image.create({
      image: req.body.url.image,
      description: req.body.desc.description,
      author: req.user_id
    })
    .then(image => {
      req.user.images.push(image);
      req.user.save(err => {
        //res.redirect('./index')
        console.log('from image controller')
        //console.log(author)
        res.render('image/index')
      })
    })
   // console.log(url)
   // res.render('user/index')
  },


}

