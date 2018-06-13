const User = require('../models/User');
const {Comment, Image} = require('../models/Image');

module.exports = {
    // index: (req, res) => {
    //     res.render('user/show');
    // },
    new: (req, res) => {
        res.render('user/new');
    },
    create: (req, res) => {
        res.render('user/create');
    },
    show: (req, res) => {
        res.render('user/show');
    }
}