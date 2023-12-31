// serveur/serveur.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require('mysql2'); // Utilisez mysql2 

const afficherRoutes = require('../Api/afficher');
const ajouterRoutes = require('../Api/ajouter');
const config = require('./config'); // Charger le fichier de configuration

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-request-Methods", "*");
  res.setHeader("Content-Type", "application/json; charset=UTF-8");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// Utiliser les routes définies dans le fichier afficher.js
app.use('/Api/afficher', afficherRoutes);

// Utiliser les routes définies dans le fichier ajouter.js
app.use('/Api/ajouter', ajouterRoutes);

// Utiliser les paramètres de connexion à la base de données depuis le fichier de configuration
const con = mysql.createConnection(config.database);

con.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
  } else {
    console.log('Connexion à la base de données réussie!');
  }
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});

