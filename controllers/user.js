const User = require('../models/User');
const {Comment, Image} = require('../models/Image');
const passport = require('passport');

module.exports = {
    // index: (req, res) => {
    //     res.render('user/show');
    // },

    index: (req, res) => {
        User.findOne({_id: req.params.id})
            .populate({
                
                    path: '_id.images',
                    // options: {dateCreated: -1}

                
            })
            .then(user => {
                res.render('user/index', { user })
            })
        
    },

    signup: (req, res) => {    
        res.render('user/signup', {message: req.flash('signupMessage')});
        
    },
    createSignup: (req, res) => {
        const signupStrategy = passport.authenticate('local-signup', {
            successRedirect: '/',
            failureRedirect: 'signup',
            failureFlash: true
        }); // end signup
        return signupStrategy(req, res);
    },
    signin: (req, res) => {
        res.render('user/signin', {message: req.flash('signinMessage')});
    },
    createSignin: (req, res) => {
        const signinStrategy = passport.authenticate('local-signin', {
            //successRedirect: '/',
            successRedirect: 'index',
            failureRedirect: 'signin',
            failureFlash: true
        });
        return signinStrategy(req, res);
    },

    signout: (req, res) => {
        console.log('logout')
        req.logout()
        res.redirect('/')
    },

    // index: (req, res) => {
    //     User.findOne({_id: req.params.id})
    //         .populate({
                
    //                 path: 'Image',
    //                 options: {dateCreated: -1}

                
    //         })
    //         .then(user => {
    //             res.render('user/index', { user })
    //         })
        
    // },
   
    show: (req, res) => {
        res.render('user/show');
    }
}