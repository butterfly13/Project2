const User = require('../models/User')
const {Image, Comment} = require('../models/Image')

module.exports = {

 
  // show all images
  index: (req, res) => {
    Image.find({})
      .limit(10)
      .sort({dateCreated: -1})
      //.sort({ dateCreated: -1 })
      // .limit(10)
      .populate('author')
      .then(images => {
        // res.send('Hello World');
        res.render('image/index', { images })
      })

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
    const url = req.body.url
    const desc = req.body.desc
    const author = res.locals.currentUser
    // Create new image
    Image.create({
      image: url,
      description: desc,
      author: author._id
    })
    .then(image => {
      req.user.images.push(image._id);
      req.user.save(err => {

        res.redirect(`/user/index`)
        
      })
    })

  },


}


