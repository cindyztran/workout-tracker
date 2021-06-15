// Dependencies
const sessionsRouter = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user.js');

//New (Login Page)
sessionsRouter.get('/new', (req, res) => {
    res.render('sessions/new', {
        //include current User Data
        currentUser : req.sessions.currentUser
    });
});


//Delete (Logout Route)
sessionsRouter.delete('/', (req, res) => {
    req.session.destroy((error) => {
        res.redirect('/');
    });
});

//Create (Login Route)
sessionsRouter.post('/', (req, res) => {
    //check for existing user
    User.findOne({
        email: req.body.email
    }, (error, foundUser) => {
        //send error message if user is not found
        if (!foundUser) {
            res.send('Sorry! There is no user registered with that email address.')
        } else {
            //user found
            //compare user input password with hashed password 
            const passwordMatches = bcrypt.compareSync(req.body.password, foundUser.password);

            //if password matches
            if (passwordMatches) {
                //add user to session
                req.session.currentUser = foundUser;
                //redirect to homepage 
                res.redirect('/');
            } else {
                //passwords do not match
                res.send('Sorry, you have entered invalid credentials.');
            }
        }
    });
});




//Export sessions router
module.exports = sessionsRouter;