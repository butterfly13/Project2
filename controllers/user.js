const User = require('../models/User');
const {Comment, Image} = require('../models/Image');
const passport = require('passport');

module.exports = {
    // index: (req, res) => {
    //     res.render('user/show');
    // },
    signin: (req, res) => {
        res.render('user/signin', {message: req.flash('signinMessage')});
    },
    createSignin: (req, res) => {
        const signin = passport.authenticate('local-signin', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        });
        return signin(req, res);
    },
    show: (req, res) => {
        res.render('user/show');
    }
}