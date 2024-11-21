const {Charge} = require('../models');

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
    }
}
/*    const { data } = req.body;
console.log('Donnée reçue:', data);
res.status(200).json({ message: 'Donnée reçue avec succès' });*/

module.exports = chargeController;