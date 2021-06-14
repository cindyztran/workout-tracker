//initialize and configure env
require('dotenv').config();

//Dependencies 
const express = require('express');

//Port: allow use of Heroku's port or local port, depending on the environment
const PORT = process.env.PORT || 3000;

//Initialize Express
const app = express();

//Home Route
app.get('/', (req, res) => {
    res.render('index.ejs')
});

//Tell Express to listen
app.listen(PORT, () => {
    console.log(`Express is listening on port ${PORT}`);
});