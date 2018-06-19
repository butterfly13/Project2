const User = require('../models/User');
const {Comment, Image} = require('../models/Image');
const passport = require('passport');

module.exports = {
    // index: (req, res) => {
    //     res.render('user/show');
    // },
    signup: (req, res) => {    
        res.render('user/signup', {message: req.flash('signupMessage')});
        
    },
    createSignup: (req, res) => {
        const signupStrategy = passport.authenticate('local-signup', {
            successRedirect: '/',
            failureRedirect: '/signup',
            failureFlash: true
        }); // end signup
        return signupStrategy(req, res);
    },
    signin: (req, res) => {
        res.render('user/signin', {message: req.flash('signinMessage')});
    },
    createSignin: (req, res) => {
        console.log('in controller action')
        const signinStrategy = passport.authenticate('local-signin', {
            //successRedirect: '/',
            successRedirect: '/',
            failureRedirect: 'signin',
            failureFlash: true
        });
        return signinStrategy(req, res);
    },

    signout: (req, res) => {
        console.log('here')
        req.logout()
        res.redirect('/')
    },
   
    show: (req, res) => {
        res.render('user/show');
    }
}