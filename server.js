/*
Imports
*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

//

/*Configuration
*/
const server = express();
const port = process.env.PORT;
//

/*
Démarrage
*/
app.listen(port, () => {
    console.log('serveur started on port ${port}');
});
//

