const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/Users.js')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})

// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));



passport.use(
    new LocalStrategy(
        function(username, password, done) {
       
            // console.log(User.findOne({username: username}));
            

            User.findOne({ username: username })
            .then((user) => {
                
                // if (err) { return done(err); }
                if (!user) {
                    return done(null, false, {message: "Username Incorrect"})
                } else {
                    bcrypt.compare(password, user.password, (err, match) => {
                        if (err) throw err

                        if (match) {
                            return done(null, user)
                        } else {
                            return done(null, false, {message: "Password Incorrect"})
                        }
                    })
                }
            })
            .catch((err) => {
                    return done(null, false, {message: err});
            })
            
        }
    )
);

passport.use( "local-signup",
    new LocalStrategy(
        function(username, password, done) {
       
            // console.log(User.findOne({username: username}));
            
            User.findOne({ username: username })
            .then((user) => {
                
                // if (err) { return done(err); }
                if (!user) {
                    const newUser = new User({ username, password })
                    
                    bcrypt.genSalt((10), (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err
                            newUser.password = hash
                            newUser
                                .save()
                                .then(user => {
                                    return done(null, user)
                                })
                                .catch((err) => {
                                    return done(null, false, {message: err})
                                })
                        })
                    })
                } else {

                    return done(null, false, {message: "Sorry that username already exists"})
                }
            })
            .catch((err) => {
                return done(null, false, {message: err});
            })
        }
    ))
    
            

module.exports = passport