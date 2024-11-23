const {Abonnement} = require('../models');

const abonnementController = {
    findAll: async (req, res) => {
        try {
            const abonnements = await Abonnement.findAll();
            res.status(200).json(abonnements);
        } catch (err) {
            console.error('Error in findAll');
            res.status(500).json({
                error: "Erreur serveur"
            })
        }
    },
    create: async (req, res) => {
        try {
            const abonnementData = req.body;
            console.log(abonnementData);
            const abonnement = await Abonnement.create(abonnementData);
            res.status(201).json(abonnement);

        } catch (err) {
            if (err.name === "SequelizeValidationError") {
                return res.status(400).json({
                    error: "Données invalides",
                    details: err.errors.map(error => ({
                        field: error.path,
                        message: error.message
                    }))
                })
            }
            console.error("Error in create:", err);
            res.status(500).json({
                error: "Erreur serveur"
            })
        }
    },
}

module.exports = abonnementController;