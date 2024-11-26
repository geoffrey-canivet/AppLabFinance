const {Transaction} = require('../models');


const transactionController = {
    findAll: async (req, res) => {
        try {
            const transactions = await Transaction.findAll();
            res.status(200).json(transactions);
        } catch (err) {
            console.error('Error in findAll');
            res.status(500).json({
                error: "Erreur serveur"
            })
        }
    },
    create: async (req, res) => {
        const { balance, isExpense, subcategoryId, userId, periodId } = req.body;
        try {

            if (!balance || !subcategoryId || !userId || !periodId) {
                return res.status(400).json({ error: "Tous les champs requis doivent être renseignés." });
            }

            // Vérification si les enregistrements liés existent // pour éviter bug si foreignkey n'existe pas
/*            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).json({ error: "Utilisateur non trouvé." });
            }

            const subcategory = await SubCategory.findByPk(subcategoryId);
            if (!subcategory) {
                return res.status(404).json({ error: "Sous-catégorie non trouvée." });
            }

            const period = await Period.findByPk(periodId);
            if (!period) {
                return res.status(404).json({ error: "Période non trouvée." });
            }*/

            // Création de la transaction
            const transaction = await Transaction.create({
                balance,
                isExpense,
                subcategoryId,
                userId,
                periodId
            });

            res.status(201).json(transaction);
        } catch (error) {
            console.error(error);

            // Gestion des erreurs (Validation ou autres)
            if (error.name === 'SequelizeValidationError') {
                return res.status(400).json({
                    error: error.errors.map((err) => err.message)
                });
            }

            res.status(500).json({ error: "Une erreur est survenue lors de la création de la transaction." });
        }
    },
}

module.exports = transactionController;