const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');
const bcrypt = require('bcrypt');

db.serialize(() => {
    // Créer la table des clients (si elle n'existe pas déjà)
    db.run(`
    CREATE TABLE IF NOT EXISTS clients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nom TEXT,
      ref TEXT,
      no_compteur TEXT,
      adresse TEXT,
      photo TEXT
    )
  `);

    // Créer la table des utilisateurs (si elle n'existe pas déjà)
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `);

    // Insérer l'utilisateur admin par défaut (si il n'existe pas déjà)
    db.get('SELECT * FROM users WHERE username = ?', ['admin'], (err, row) => {
        if (!row) {
            const defaultPassword = 'admin'; // Mot de passe par défaut
            bcrypt.hash(defaultPassword, 10, (err, hash) => {
                if (err) throw err;
                db.run('INSERT INTO users (username, password) VALUES (?, ?)', ['admin', hash]);
            });
        }
    });
});

module.exports = db;