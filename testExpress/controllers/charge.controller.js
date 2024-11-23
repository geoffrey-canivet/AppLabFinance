const {Charge} = require('../models');
/*const charges = await Charge.findAll();*/

const chargeController = {
    findAll: async (req, res) => {
        try {
            const charges = await Charge.findAll();
            res.status(200).json(charges);
        } catch (err) {
            console.error('Error in findAll');
            res.status(500).json({
                error: "Erreur serveur"
            })
        }
    },
    create: async (req, res) => {
        try {
            const chargeData = req.body;
            console.log(chargeData);
            const charge = await Charge.create(chargeData);
            res.status(201).json(charge);

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

            const deleted = await Charge.destroy({
                where: {
                    id
                }
            })

            if (!deleted) {
                return res.status(404).json({
                    error: "charge introuvable"
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

            const charge = await Charge.findOne({
                where: {
                    id,
                }
            })

            if (!charge) {
                return res.status(404).json({
                    error: "charge introuvable"
                })
            }

            const updateDatas = req.body;
            await charge.update(updateDatas);

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
    },
    reloadCharge: async (req, res) => {
        try {
            const charges = await Charge.findAll();
            res.render('./pages/card-charges', { charges }, (err, html) => {
                if (err) {
                    return res.status(500).send('Erreur lors du rendu du contenu.');
                }
                res.send(html);
            });
        } catch (error) {
            res.status(500).send('Erreur lors de la récupération des données de la base.');
        }
    }
}

module.exports = chargeController;