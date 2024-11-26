const {SubCategory} = require('../models');

const subcategoryController = {
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