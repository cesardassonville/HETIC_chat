/*
Imports
*/

//

/*Configuration
*/
let express = require('express');
let port = 8080;
let app = express();
//

/*
Démarrage
*/
app.listen(port, () => {
    console.log('serveur started on port ' + port);
});
//

