const {User} = require('../models');

const userController = {
    createMany: async (req, res) => {
        try {
            const usersData = [
                // DEP FIXES
                {name: "Geoffrey", email: "geoffrey@mail.com", password: "12345678"},
                {name: "Amory", email: "amory@mail.com", password: "12345678"},
                {name: "Laurent", email: "laurent@mail.com", password: "12345678"},
                {name: "Amael", email: "amael@mail.com", password: "12345678"},
                {name: "Martine", email: "martine@mail.com", password: "12345678"},
            ]
            if (!Array.isArray(usersData)) {
                return res.status(400).json({
                    error: "Les données doivent être un tableau d'objets"
                });
            }

            const users = await User.bulkCreate(usersData, { validate: true });
            res.status(200).json({
                message: `${users.length} users ajoutées avec succès`,
                users,
            });
        } catch (err) {
            console.error('Error in createMany:', err);
            res.status(500).json({
                error: "Erreur serveur",
                details: err.message,
            });
        }
    },
    findAll: async (req, res) => {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (err) {
            console.error('Error in findAll');
            res.status(500).json({
                error: "Erreur serveur"
            })
        }
    },
};

module.exports = userController;