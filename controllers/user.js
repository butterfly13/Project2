const User = require('../models/User');
const {Comment, Image} = require('../models/Image');
const passport = require('passport');

module.exports = {
    // index: (req, res) => {
    //     res.render('user/show');
    // },
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

    // index: (req, res) => {
    //     console.log('from user controllers')
    //     console.log(res.locals.currentUser)
    //     console.log('==================')
        
        // console.log(res.locals.currentUser.username)
        // User.findOne({_id: req.params.id})
        //     .populate({
                
        //             path: 'images'
        //             // options: {dateCreated: -1}

                
        //     })
            
        //     .then(user => {
        //     //    const newUsername = res.locals.currentUser.username
        //     //    console.log(newUsername)
        //         res.render('user/index', { user})

                
        //     })
    //         console.log('after sigin success')
    //         const newUsername = res.locals.currentUser.images
    //         console.log(newUsername)
    //         res.render('user/index', {newUsername})
    // },
    // GET Sign up
    signup: (req, res) => {    
        res.render('user/signup', {message: req.flash('signupMessage')});
        
    },
    // POST sign up
    createSignup: (req, res) => {
        const signupStrategy = passport.authenticate('local-signup', {
            successRedirect: '/',
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
        let id = req.params.id
        User.findById(id)
        .then((user) => {
            res.render('user/show', {user});
        })
        
    }
}