//Création du server
const dotenv = require('dotenv').config();
const express = require('express');
const site = express();

const router = require("./site/routes/route");

//création du port
const PORT = process.env.PORT || 4000;

//utilisation de la methode router()
site.use(router);

//utilisation de ejs
site.set('veiw engine', 'ejs');

//indiquer à express ou trouver les vues 
site.set('views' , __dirname + '/site/views');

//Indiquer ou trouver les fichiers static
site.use(express.static(__dirname + '/public'))

//fonction qui demarera l'application lorsque le port est solicité
site.listen(PORT , ()=>{
    console.log(`le serveur est démarré sur le port : http://localhost:${PORT}`);
   
    
})