const User = require('../models/User');
const {Image, Comment} = require('../models/Image');

module.exports = {
    index: (req, res) => {
        res.render('image/index');
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