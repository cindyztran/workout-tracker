//Dependencies
const router = require('express').Router();

//Define routes/controllers

//Mount controller on /exercisesplit
router.get('/', (req, res) => {
    res.render('exercisesplit/index');
});

//Exports
module.exports = router; 