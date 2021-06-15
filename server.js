//Initialize and configure env
require('dotenv').config();

//Dependencies 
const express = require('express');
const methodOverride = require('method-override');
const logger = require('morgan');

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

//Home Index
app.get('/', (req, res) => {
    res.render('index');
});

//Mount Middleware

//bodyparser middleware
app.use(express.urlencoded({ extended: false }));

//methodoverride middleware
app.use(methodOverride('_method'));

//server logger middleware
app.use(logger('dev'));

//Mount Controller Middleware
//mount /workout
app.use('/workouts', require('./controllers/workouts'));

//mount /exercises 
app.use('/exercises', require('./controllers/exercises'));

//Tell Express to listen
app.listen(PORT, () => {
    console.log(`Express is listening on port ${PORT}`);
});