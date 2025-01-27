const express = require('express');
const multer = require('multer');
const db = require('./database');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Configuration de Multer pour l'upload de fichiers
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Nom unique pour le fichier
    }
});

const upload = multer({ storage: storage });

// Middleware pour servir les fichiers statiques
app.use('/uploads', express.static('uploads'));

// Middleware pour vérifier le token JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, 'your_secret_key', (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        req.user = user;
        next();
    });
}

// Route pour l'inscription
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Vérifier si l'utilisateur existe déjà
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (row) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Hasher le mot de passe
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            // Insérer le nouvel utilisateur dans la base de données
            const sql = `INSERT INTO users (username, password) VALUES (?, ?)`;
            db.run(sql, [username, hash], function (err) {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.json({ id: this.lastID });
            });
        });
    });
});

// Route pour la connexion
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Vérifier si l'utilisateur existe
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Vérifier le mot de passe
        bcrypt.compare(password, row.password, (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (!result) {
                return res.status(400).json({ error: 'Invalid username or password' });
            }

            // Générer un token JWT
            const token = jwt.sign({ id: row.id, username: row.username }, 'your_secret_key', { expiresIn: '1h' });

            // Renvoyer le token
            res.json({ token });
        });
    });
});

// Route pour ajouter un client (protégée)
app.post('/clients', authenticateToken, upload.single('photo'), (req, res) => {
    const { nom, ref, no_compteur, adresse } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    const sql = `INSERT INTO clients (nom, ref, no_compteur, adresse, photo) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [nom, ref, no_compteur, adresse, photo], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID });
    });
});

// Route pour récupérer tous les clients (protégée)
app.get('/clients', authenticateToken, (req, res) => {
    const sql = `SELECT * FROM clients`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Route pour modifier un client (protégée)
app.put('/clients/:id', authenticateToken, upload.single('photo'), (req, res) => {
    const { id } = req.params;
    const { nom, ref, no_compteur, adresse } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    // Récupérer l'ancienne photo pour la supprimer si nécessaire
    db.get('SELECT photo FROM clients WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const oldPhoto = row ? row.photo : null;

        // Mettre à jour le client
        const sql = `UPDATE clients SET nom = ?, ref = ?, no_compteur = ?, adresse = ?, photo = ? WHERE id = ?`;
        db.run(sql, [nom, ref, no_compteur, adresse, photo, id], function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            // Supprimer l'ancienne photo si elle existe
            if (oldPhoto && oldPhoto !== photo) {
                const fs = require('fs');
                const oldPhotoPath = path.join(__dirname, oldPhoto);
                fs.unlink(oldPhotoPath, (err) => {
                    if (err) console.error('Erreur lors de la suppression de l\'ancienne photo :', err);
                });
            }

            res.json({ message: 'Client modifié avec succès !' });
        });
    });
});

// Route pour supprimer un client (protégée)
app.delete('/clients/:id', authenticateToken, (req, res) => {
    const { id } = req.params;

    // Récupérer la photo du client pour la supprimer
    db.get('SELECT photo FROM clients WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const photo = row ? row.photo : null;

        // Supprimer le client
        const sql = `DELETE FROM clients WHERE id = ?`;
        db.run(sql, [id], function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            // Supprimer la photo si elle existe
            if (photo) {
                const fs = require('fs');
                const photoPath = path.join(__dirname, photo);
                fs.unlink(photoPath, (err) => {
                    if (err) console.error('Erreur lors de la suppression de la photo :', err);
                });
            }

            res.json({ message: 'Client supprimé avec succès !' });
        });
    });
});

// Route pour modifier le mot de passe
app.post('/change-password', authenticateToken, async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user.id; // Récupérer l'ID de l'utilisateur à partir du token JWT

    try {
        // Récupérer l'utilisateur depuis la base de données
        const user = await new Promise((resolve, reject) => {
            db.get('SELECT * FROM users WHERE id = ?', [userId], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });

        if (!user) {
            return res.status(404).json({ error: 'Utilisateur non trouvé.' });
        }

        // Vérifier le mot de passe actuel
        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Mot de passe actuel incorrect.' });
        }

        // Hasher le nouveau mot de passe
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        // Mettre à jour le mot de passe dans la base de données
        await new Promise((resolve, reject) => {
            db.run('UPDATE users SET password = ? WHERE id = ?', [hashedNewPassword, userId], function (err) {
                if (err) reject(err);
                else resolve();
            });
        });

        res.json({ message: 'Mot de passe modifié avec succès !' });
    } catch (error) {
        console.error('Erreur :', error);
        res.status(500).json({ error: 'Erreur lors de la modification du mot de passe.' });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});