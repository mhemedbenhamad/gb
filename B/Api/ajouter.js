// api/ajouter.js

const express = require('express');
const mysql = require('mysql');
const config = require('../serveur/config'); // Remontez d'un niveau pour accéder au dossier "serveur"

const router = express.Router();

const con = mysql.createConnection(config.database);

// Insérer des étudiants
router.post('/', (req, res) => {
  const sql = 'INSERT INTO etudiants (Cin, Nom, Prenom, Classe) VALUES (?,?,?,?)';
  const values = [req.body.Cin, req.body.Nom, req.body.Prenom, req.body.Classe];

  con.query(sql, values, (err, data) => {
    if (err) {
      console.error('Erreur de requête :', err);
      res.status(500).send('Erreur de serveur');
    } else {
      res.status(200).json(data);
    }
  });
});

module.exports = router;
