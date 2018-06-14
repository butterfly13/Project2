const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

module.exports = function(passport) {
    passport.serializeUser(function(user, callback){
        callback(null, user.id)
    }); // end passport.serializeUser

    passport.deserializeUser(function(id, callback){
        User.findById(id, function(err, user){
            callback(err, user);
        });
    }) // end passport.deserializeUser

    passport.use(
        'local-signup',
        {
            usernameField: 'userName',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, userName, password, callback){
            User.findOne({'userName': userName})
            .then(user => {
                if(user){
                    return callback(
                        null, 
                        false, 
                        req.flash('signupMessage', 'this username is already used')
                    );// end user callback
                } else {
                    let newUser = new User();
                    newUser.userName = userName;
                    newUser.password = password;

                    newUser.save(err => {
                        if(err) throw err;
                        return callback(null, newUser);
                    }) // end newUser.save
                } // end else
            })
            .catch(err => console.log(err))
        }
    )


// Sign In
passport.use(
    'local-signin',
    new LocalStrategy (
        {
            usernameField: 'userName',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, userName, password, callback) {
            User.findOne({'userName': userName}), function(err, user){
                if(err) return callback(err);

                if(!user){
                    return callback(
                        null,
                        false,
                        req.flash('signinMessage', 'No user found')
                    );
                } // end !user
                if(!user.validPassword(password)){
                    return callback(
                        null,
                        false,
                        req,flash('signinMessage', 'Wrong password')
                    );
                } // end !user.validPassword
                return callback(null, user);
            }; //end findOne
        } // end function
    ) // end new LocalStrategy
); // end passport.use

};