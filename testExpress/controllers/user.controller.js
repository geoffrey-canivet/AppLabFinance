const {User, Transaction, SubCategory, Category, Period} = require('../models');

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
    getUserDataByPeriod: async (req, res) => {

        const { userId } = req.params; // Récupère l'ID utilisateur depuis l'URL
        console.log(`Requête reçue pour l'utilisateur ID: ${userId}`);

        try {
            // Trouver la période correspondant au 1er janvier 2024
            const period = await Period.findOne({
                where: { month: 1, year: 2024 }
            });

            if (!period) {
                console.log("Période non trouvée pour janvier 2024.");
                return res.status(404).json({ error: "Période introuvable pour le 1er janvier 2024." });
            }

            console.log(`Période trouvée : ${JSON.stringify(period)}`);

            // Récupérer les données de l'utilisateur avec les relations nécessaires
            const userWithTransactions = await User.findByPk(userId, {
                include: [
                    {
                        model: Transaction,
                        as: 'transactions', // Alias défini dans le modèle
                        where: { periodId: period.id }, // Filtrer par la période spécifique
                        include: [
                            {
                                model: SubCategory,
                                as: 'subcategory', // Alias défini dans le modèle
                                include: [
                                    {
                                        model: Category,
                                        as: 'category' // Alias défini dans le modèle
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });

            if (!userWithTransactions) {
                console.log(`Utilisateur avec ID ${userId} introuvable ou aucune transaction associée.`);
                return res.status(404).json({ error: "Utilisateur introuvable ou aucune transaction pour cette période." });
            }

            console.log(`Utilisateur trouvé avec transactions : ${JSON.stringify(userWithTransactions)}`);
            res.status(200).json(userWithTransactions);
        } catch (error) {
            console.error("Erreur attrapée lors de la récupération des données :", error);
            res.status(500).json({ error: "Erreur lors de la récupération des données." });
        }
    }
};

module.exports = userController;