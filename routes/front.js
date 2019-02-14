/*
Imports
*/
const express = require('express');
const routeur = express.Routeur();
//

/*
Configuration
*/
routeur.get('/', (req, res) => {
    res.render('index');
});
//

/*
Export
*/
module.exports = router;
//