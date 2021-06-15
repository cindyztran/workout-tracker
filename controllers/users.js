//Dependencies
const bcrypt = require('bcrypt');
const userRouter = require('express').Router();
const User = require('../models/user.js');

//New (Registration Page)



//Create (Registration Route)
userRouter.post('/', (req, res) => {
    //overwrite user password with hashed password and pass into database
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(12));

    User.create(req.body, (error, createdUser) => {
        res.redirect('/');
    });
});



//Export User Router
module.exports = userRouter;
