#HETIC_chat

Mise ne place d"une application de chat (chatbot)

- Initialiser le dossier du serveur 
- Créer un fichier pour le serveur
- Importer express body-parser dotenv ejs mongoose path nodemon (npm i -s ...)
- Configurer le fichier serveur :
    - Créer une constante pour les imports (attention à dotenv)
    - Créer une constante pour le serveur (utilisation de la fonction express())
    - Configurer les composants
    - Lancer le serveur

## Configuration des vues client
- Définir le _moteur de rendu_ en __ejs__
- Définir un dossier "__www__" comme étant le _dossier client_
- Créer un fichier "__index.ejs__" dans le dossier "__www__"
- Créer un routeur front
    - Créer la route Homepage
    - Créer la route registre
    - Créer la route login
    - Créer la route chat