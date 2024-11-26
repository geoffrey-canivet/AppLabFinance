const {SubCategory} = require('../models');

const subcategoryController = {
    createMany: async (req, res) => {
        try {
            const subcatsData = [
                // CHARGES
                {name: "Electricité", categoryId: 1}, {name: "Eau", categoryId: 1}, {name: "Loyer", categoryId: 1},
                // ASSURANCES
                {name: "Vie", categoryId: 2}, {name: "Maladie", categoryId: 2}, {name: "Civile", categoryId: 2}, {name: "Accident", categoryId: 2},
                // CREDITS
                {name: "Voiture", categoryId: 3}, {name: "Travaux", categoryId: 3}, {name: "Consomation", categoryId: 3},
                // ABONNEMENTS
                {name: "Streaming", categoryId: 4}, {name: "Jeux vidéo", categoryId: 4}, {name: "Magazines", categoryId: 4},
                // Courrantes
                {name: "Alimentaire", categoryId: 5}, {name: "Carburant", categoryId: 5}, {name: "Fastfood", categoryId: 5},
                // LOISIRS
                {name: "Spectacle", categoryId: 6}, {name: "Concert", categoryId: 6}, {name: "Voyage", categoryId: 6},
                // OCCASIONNELLES
                {name: "Coiffeur", categoryId: 7}, {name: "Médecin", categoryId: 7}, {name: "Cadeaux", categoryId: 7},
                // AUTRES
                {name: "Avocat", categoryId: 8}, {name: "Donations", categoryId: 8}, {name: "Comptable", categoryId: 8},


            ]
            if (!Array.isArray(subcatsData)) {
                return res.status(400).json({
                    error: "Les données doivent être un tableau d'objets"
                });
            }

            const subcats = await SubCategory.bulkCreate(subcatsData, { validate: true });
            res.status(200).json({
                message: `${subcats.length} sous-catégories ajoutées avec succès`,
                subcats,
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
            console.log("test");
            const subcategories = await SubCategory.findAll();
            res.status(200).json(subcategories);
        } catch (err) {
            console.error('Error in findAll');
            res.status(500).json({
                error: "Erreur serveur"
            })
        }
    },
    create: async (req, res) => {
        try {
            const subcategoryData = req.body;
            const subcategory = await SubCategory.create(subcategoryData)
            res.status(200).json(subcategory);
        } catch (err) {

        }
    },
    destroy: async (req, res) => {
        try {

        } catch (err) {

        }
    },
    update: async (req, res) => {
        try {

        } catch (err) {

        }
    }
}


module.exports = subcategoryController;