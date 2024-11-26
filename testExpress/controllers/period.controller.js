const {Period} = require('../models');

const periodController = {
    createMany: async (req, res) => {
        try {
            const periodsData = [
                // 2024
                {month: 1, year: 2024}, {month: 2, year: 2024}, {month: 3, year: 2024},
                {month: 4, year: 2024}, {month: 5, year: 2024}, {month: 6, year: 2024},
                {month: 7, year: 2024}, {month: 8, year: 2024}, {month: 9, year: 2024},
                {month: 10, year: 2024}, {month: 11, year: 2024}, {month: 12, year: 2024},
                // 2023
                {month: 1, year: 2023}, {month: 2, year: 2023}, {month: 3, year: 2023},
                {month: 4, year: 2023}, {month: 5, year: 2023}, {month: 6, year: 2023},
                {month: 7, year: 2023}, {month: 8, year: 2023}, {month: 9, year: 2023},
                {month: 10, year: 2023}, {month: 11, year: 2023}, {month: 12, year: 2023},
                // 2022
                {month: 1, year: 2022}, {month: 2, year: 2022}, {month: 3, year: 2022},
                {month: 4, year: 2022}, {month: 5, year: 2022}, {month: 6, year: 2022},
                {month: 7, year: 2022}, {month: 8, year: 2022}, {month: 9, year: 2022},
                {month: 10, year: 2022}, {month: 11, year: 2022}, {month: 12, year: 2022},
                // 2021
                {month: 1, year: 2021}, {month: 2, year: 2021}, {month: 3, year: 2021},
                {month: 4, year: 2021}, {month: 5, year: 2021}, {month: 6, year: 2021},
                {month: 7, year: 2021}, {month: 8, year: 2021}, {month: 9, year: 2021},
                {month: 10, year: 2021}, {month: 11, year: 2021}, {month: 12, year: 2021},
            ]
            if (!Array.isArray(periodsData)) {
                return res.status(400).json({
                    error: "Les données doivent être un tableau d'objets"
                });
            }

            const periods = await Period.bulkCreate(periodsData, { validate: true });
            res.status(200).json({
                message: `${periods.length} periodes ajoutées avec succès`,
                periods,
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
            const periods = await Period.findAll();
            res.status(200).json(periods);
        } catch (err) {
            console.error('Error in findAll');
            res.status(500).json({
                error: "Erreur serveur"
            })
        }
    },
}

module.exports = periodController;