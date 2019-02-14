/*
Imports
*/

//Node.js
//Constante pour les imports npm
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

//Inner
const frontRouteur = require('./routes/front.js');

/*
Configuration
*/
const server = express();
const port = process.env.PORT;

class ServerClass{

    init(){

        //config du dossier client
        server.set( 'views', __dirmane + '/www' );
        server.use( express.static(path.join(__dirname, 'www')) );

        //config du server de rendu
        server.set( 'view engine', 'ejs' );

        //configurer les routes
        server.use('/', frontRouter);

        //lancer le server
        this.Launch();

    }

    Launch(){
        server.listen(port, () => {
            console.log('serveur started on port ${port}');
        });
    }
}
//

/*npm
Démarrage
*/
    new ServerClass().Launch();
//

