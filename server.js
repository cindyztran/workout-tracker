//Initialize and configure env
require('dotenv').config();

//Dependencies 
const express = require('express');

//Port
//allow use of Heroku's port or local port, depending on the environment
const PORT = process.env.PORT || 3000;

//Initialize Express
const app = express();

//Set default view engine
app.set('view engine', 'ejs');

//Home Route
app.get('/', (req, res) => {
    res.render('index.ejs')
});

//Exercise split index
app.get('/', (req, res) => {
    res.render('index');
});

//Mount Middleware
app.use('/exercisesplit', require('./controllers/exercisesplit'));

//Tell Express to listen
app.listen(PORT, () => {
    console.log(`Express is listening on port ${PORT}`);
});