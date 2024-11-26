const {Category, SubCategory} = require('../models');

const categoryController = {
    createMany: async (req, res) => {
        try {
            const categoriesData = [
                // DEP FIXES
                {name: "Charges", type: "Fixes"},
                {name: "Crédits", type: "Fixes"},
                {name: "Assurances", type: "Fixes"},
                {name: "Abonnements", type: "Fixes"},
                // DEP OCCASIONNELLES
                {name: "Courrantes", type: "Occasionnelles"},
                {name: "Loisirs", type: "Occasionnelles"},
                {name: "Occasionnelles", type: "Occasionnelles"},
                {name: "Autres", type: "Occasionnelles"},
                // REVENU
                {name: "Principal", type: "Revenus"},
                {name: "Secondaire", type: "Revenus"},
                {name: "Exeptionnel", type: "Revenus"},
                {name: "Aides", type: "Revenus"}
            ]
            if (!Array.isArray(categoriesData)) {
                return res.status(400).json({
                    error: "Les données doivent être un tableau d'objets"
                });
            }

            const categories = await Category.bulkCreate(categoriesData, { validate: true });
            res.status(200).json({
                message: `${categories.length} catégories ajoutées avec succès`,
                categories,
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
            const categories = await Category.findAll();
            res.status(200).json(categories);
        } catch (err) {
            console.error('Error in findAll');
            res.status(500).json({
                error: "Erreur serveur"
            })
        }
    },
    create: async (req, res) => {
        try {
            const categoryData = req.body;
            const category = await Category.create(categoryData)
            res.status(200).json(category);
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
    },
    getSubCategory: async (req, res) => {
        const {id} = req.params;
        try {
            const category = await Category.findByPk(id, {
                include: [
                    {
                        model: SubCategory,
                        as: 'subCategories' // Doit correspondre à l'alias dans la relation
                    }
                ]
            });

            if (!category) {
                return res.status(404).json({ error: "Catégorie non trouvée" });
            }

            // Envoie la catégorie avec ses sous-catégories
            res.status(200).json(category);
        } catch (err) {

        }
    }
}

module.exports = categoryController;