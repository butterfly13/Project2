const User = require('../models/User');
const {Image, Comment} = require('../models/Image');

module.exports = {
    index: (req, res) => {
        Image.find({})
        .sort({ dateCreated: -1 })
        .limit(10)
        .populate('author')
        .then(images => {
           //res.send('Hello World');
            res.render('image/index', { images })
        })


        //res.render('image/index');
    },
    show: (req, res) => {
        res.render('image/show');
    },
    new: (req, res) => {
        res.render('image/new');
    },
    create: (req, res) => {
        res.render('image/create');
    }
}