const { Assurance } = require("../models");

const assuranceController = {
    findAll: async (req, res) => {
        try {
            const assurances = await Assurance.findAll();
            res.status(200).json(assurances);
        } catch (err) {
            console.error('Error in findAll');
            res.status(500).json({
                error: "Erreur serveur"
            })
        }
    },
    create: async (req, res) => {
        try {
            const assuranceData = req.body;
            console.log(assuranceData);
            const assurance = await Assurance.create(assuranceData);
            res.status(201).json(assurance);

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

module.exports = assuranceController;