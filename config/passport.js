const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

module.exports = function (passport) {
  // passport authentication works by storing a value
  // in a cookie, then the cookie will be sent to the server for every request
  // untill the session is expired => it is called serialization
  passport.serializeUser(function (user, callback) {
    callback(null, user.id)
  }) // end passport.serializeUser

  passport.deserializeUser(function (id, callback) {
    User.findById(id, function (err, user) {
      callback(err, user)
    })
  }) // end passport.deserializeUser

  // Sign up
  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      },
      function (req, username, password, callback) {
        // find a user with this email
        User.findOne({'username': username}, function (err, user) {
          if (err => {
            return callback(err)
          })

          // if there already a user with username
            if(user){
              return callback(
                null,
                false,
                req.flash('signupMessage', 'This user is already used.'))
          } else {
            // no email registered with this username
            // create a new user
            //var email = req.body.email
            var newUser = new User()
            newUser.username = username
           //newUser.email = email
            newUser.password = newUser.encrypt(password)
            
            User.create(newUser, function(err, user){
              if(err) throw err
              console.log(user)
            })

            // newUser.save(function(err){
            //   if(err) throw err
            //   return callback(null, newUser)
            // }) // end newUser.save
            
          } // end if user with this username
        }) // end findOne
       
      }
    )

  )
  // Sign In
  passport.use(
    'local-signin',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      },
      function (req, username, password, callback) {
        // find user
        User.findOne({'username': username}, function (err, user) {
          if (err => {
            return callback(err)
          })

          // if the user is not found
          if (!user) {
            return callback(
              null,
              false,
              req.flash('signinMessage', 'No user found')
              
            )
          } // end !user
          // Wrong password
          if (!user.validPassword(password)) {
            return callback(
              null,
              false,
              req.flash('signinMessage', 'Wrong password')
            )
          } // end !user.validPassword
          return callback(null, user)
          
        }) // end findOne
      } // end function
    ) // end new LocalStrategy
  ) // end passport.use
} // end module.exports
