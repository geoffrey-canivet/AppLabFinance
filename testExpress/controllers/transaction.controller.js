const {Transaction, User, SubCategory, Period} = require('../models');


const transactionController = {
    createMany: async (req, res) => {
        try {
            const transactionsData = [
                // charges
                {userId: 1, balance: 200.50, isExprense: true, subcategoryId: 1, periodId: 1},
                {userId: 1, balance: 100.00, isExprense: true, subcategoryId: 2, periodId: 1},
                {userId: 1, balance: 60.00, isExprense: true, subcategoryId: 3, periodId: 1},
                // assurances
                {userId: 1, balance: 200.50, isExprense: true, subcategoryId: 4, periodId: 1},
                {userId: 1, balance: 100.00, isExprense: true, subcategoryId: 5, periodId: 1},
                {userId: 1, balance: 60.00, isExprense: true, subcategoryId: 6, periodId: 1},
                // crédits
                {userId: 1, balance: 200.50, isExprense: true, subcategoryId: 10, periodId: 1},
                {userId: 1, balance: 100.00, isExprense: true, subcategoryId: 11, periodId: 1},
                {userId: 1, balance: 60.00, isExprense: true, subcategoryId: 12, periodId: 1},
            ]
            if (!Array.isArray(transactionsData)) {
                return res.status(400).json({
                    error: "Les données doivent être un tableau d'objets"
                });
            }

            const transactions = await Transaction.bulkCreate(transactionsData, { validate: true });
            res.status(200).json({
                message: `${transactions.length} transactions ajoutées avec succès`,
                transactions,
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
        const { userId, balance, isExpense, subcategoryId, periodId } = req.body;

        try {
            // Vérifications préalables
            const user = await User.findByPk(userId);
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
            }

            const transaction = await Transaction.create({
                userId,
                balance,
                isExpense,
                subcategoryId,
                periodId
            });

            res.status(201).json({
                message: "Transaction effectuée avec succès.",
                transaction
            });
        } catch (error) {
            console.error(error);

            if (error.name === 'SequelizeValidationError') {
                return res.status(400).json({
                    error: error.errors.map(err => err.message)
                });
            }

            res.status(500).json({ error: "Erreur lors de l'enregistrement de la transaction." });
        }
    },
}

module.exports = transactionController;