// api/afficher.js

const express = require('express');
const mysql = require('mysql');
const config = require('../serveur/config'); // Remontez d'un niveau pour accéder au dossier "serveur"

const router = express.Router();

const con = mysql.createConnection(config.database);

// Sélection des étudiants
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM etudiants';

  con.query(sql, (err, data) => {
    if (err) {
      console.error('Erreur de requête :', err);
      res.status(500).send('Erreur de serveur');
    } else {
      res.status(200).json(data);
    }
  });
});

module.exports = router;

