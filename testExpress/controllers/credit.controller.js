const {Credit, credit} = require('../models');

const creditController = {
    findAll: async (req, res) => {
        try {
            const credits = await Credit.findAll();
            res.status(200).json(credits);
        } catch (err) {
            console.error('Error in findAll');
            res.status(500).json({
                error: "Erreur serveur"
            })
        }
    },
    create: async (req, res) => {
        try {
            const creditData = req.body;
            console.log(creditData);
            const credit = await Credit.create(creditData);
            res.status(201).json(credit);

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
    destroy: async (req, res) => {
        try {
            const id = req.params.id;

            const deleted = await Credit.destroy({
                where: {
                    id
                }
            })

            if (!deleted) {
                return res.status(404).json({
                    error: "credit introuvable"
                })
            }

            res.status(204).send();

        } catch (err) {
            console.error('Error in destroy', err);
            res.status(500).json({
                error: 'Erreur serveur'
            })
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;

            const credit = await Credit.findOne({
                where: {
                    id,
                }
            })

            if (!credit) {
                return res.status(404).json({
                    error: "credit introuvable"
                })
            }

            const updateDatas = req.body;
            await credit.update(updateDatas);

            // upgate mois, trimestre, année

        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                return res.status(400).json({
                    error: 'Données invalides',
                    details: err.errors.map(error => ({
                        field: error.path,
                        message: error.message
                    }))
                })
            }

            console.error('Error in update', err);
            res.status(500).json({
                error: 'Erreur serveur'
            })
        }
    }
}


module.exports = creditController;