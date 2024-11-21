const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize et DataTypes
const config = require('../config/db.js');

// Création d'une nouvelle instance de Sequelize avec la configuration
const sequelizeInstance = new Sequelize(config);

// Création d'un objet vide pour contenir tous les modèles et configurations
const db = {};

// création de la lecture des fichiers models et synchronisation avec la db
// lecture automatique des fichier models dans le dossier courrant (models)
fs.readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf('.') !== 0 && // ignorer les fichier commencant par un point
            file !== 'index.js' &&  // ignorer le fichier index.js
            file.slice(-3) === '.js' // ne prend que les fichier .js
        )
    })
    .forEach(file => {
        // pour chaque fichier trouvé:
        // - construire le chemin complet du fichier
        // - require le model
        // - transérer les parametres sequelize et datatype
        // - ajouter a l'objet db avec son propre nom comme clé
        const model = require(path.join(__dirname, file))(sequelizeInstance, DataTypes);
        db[model.name] = model;
    })

// une fois que les mlodels sont lus chargé on configure les associassion reletion
Object.keys(db).forEach(model => {
    // pour chaque model, si une méthode associate existe alors on l'appelle en passant tout les model en paramete
    // ce qui permet de confirmer les relations
    if (db[model].associate) {
        db[model].associate(db);
    }
})

// Ajout de l'instance Sequelize à l'objet db
db.sequelize = sequelizeInstance;

// Ajout de la classe Sequelize pour accéder aux types et utilitaires
db.Sequelize = Sequelize;

module.exports = db; // Export de l'objet db