const User = require('../models/User');
const {Comment, Image} = require('../models/Image');
const passport = require('passport');

module.exports = {

    // show user profile that will display all the images from that usr
    show: (req, res) => {
        User.findOne({_id: req.params.id})
        .populate({
                
                        path: 'images',
                        options: {dateCreated: -1}
    
                    
                })
        .then((user) => {
            res.render('user/show', {user});


        });

    },
    
//  for temporaly: will need to work on show all the images from single user
// after user sign in
    index: (req, res) => {
        Image.find({})
          .sort({ dateCreated: -1 })
          .limit(10)
          .populate('author')
          .then(images => {
            // res.send('Hello World');
            res.render('image/index', { images })
          })
        },

    // GET Sign up
    signup: (req, res) => {    
        res.render('user/signup', {message: req.flash('signupMessage')});
        
    },
    // POST sign up
    createSignup: (req, res) => {
        const signupStrategy = passport.authenticate('local-signup', {
            successRedirect: 'index',
            failureRedirect: 'signup',
            failureFlash: true
        }); // end signup
        return signupStrategy(req, res);
    },
    // GET sign in
    signin: (req, res) => {
        res.render('user/signin', {message: req.flash('signinMessage')});
    },
    // POST sign in
    createSignin: (req, res) => {
        const signinStrategy = passport.authenticate('local-signin', {
            successRedirect: 'index',
            failureRedirect: 'signin',
            failureFlash: true
        });
        return signinStrategy(req, res);
    },
    // Sign out
    signout: (req, res) => {
        console.log('logout')
        req.logout()
        res.redirect('/')
    }


}