require('dotenv').config();

//Dependencies 
const express = require('express');

//Initialize Express
const app = express();

//Tell Express to listen
app.listen(port, () => {
    console.log(`Express is listening on port ${PORT}`);
});