const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post('/login', (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
        
        if (err) {
            return res.status(400).json({ errors: err})
        }
        if (!user) {
            return res.status(400).json({errors: `${info.message}`})
        }
        req.logIn(user, function(err) {
            if (err) {
            return res.status(400).json({errors: err})
            }
            
        return res.status(200).json({user: user.username, id: user.id})
        })
    })(req, res, next)
})

router.post('/register', (req, res, next) => {
    passport.authenticate('local-signup', function(err, user, info) {
        
        
        if (err) {
            return res.status(400).json({ errors: err})
        }
        if (!user) {
            return res.status(400).json({errors: `${info.message}`})
        }
        req.logIn(user, function(err) {
            if (err) {
            return res.status(400).json({errors: err})
            }
            
        return res.status(200).json({success: `Welcome ${user.username}`, id: user.id})
        })
    })(req, res, next)
})


module.exports = router;