//Initialize and configure env
require('dotenv').config();

//Dependencies 
const express = require('express');

//Port
//allow use of Heroku's port or local port, depending on the environment
const PORT = process.env.PORT || 3000;

//Initialize Express
const app = express();

//Configure Mongoose
const mongoose = require('mongoose');

//Connection variable. Object that represents connection instance.
//Use to get info about mongodb connection
const db = mongoose.connection;

//Method for connection to mongodb
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// Error / Success 
//Listen for mongodb events
db.on('error', (err) => console.log(err.message, + ' is mongodb connected?'));
db.on('connected', () => console.log('mongodb connected'));
db.on('disconnected', () => console.log('mongodb disconnected'));

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