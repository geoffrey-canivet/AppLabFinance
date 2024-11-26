const {User, Transaction, SubCategory, Category, Period} = require('../models');

const dashboardController = {
    renderDashboard: async (req, res) => {

        const { userId } = req.params; // Récupère l'ID utilisateur depuis l'URL
        console.log(`Requête reçue pour l'utilisateur ID: ${userId}`);

        try {
            // Récupérer l'utilisateur, ses categories, sous-catégorie, ses transactions pour janvier 2024
            const period = await Period.findOne({
                where: { month: 1, year: 2024 }
            });

            if (!period) {
                console.log("Période non trouvée pour janvier 2024.");
                return res.status(404).json({ error: "Période introuvable pour le 1er janvier 2024." });
            }

            console.log(`Période trouvée : ${JSON.stringify(period)}`);

            // Récupérer les données de l'utilisateur avec les relations nécessaires
            const userData = await User.findByPk(userId, {
                include: [
                    {
                        model: Transaction,
                        as: 'transactions', // Alias défini dans le modèle
                        where: { periodId: period.id }, // Filtrer par la période spécifique
                        include: [
                            {
                                model: SubCategory,
                                as: 'subcategory', // Alias défini dans le modèle
                                include: [
                                    {
                                        model: Category,
                                        as: 'category' // Alias défini dans le modèle
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });

            if (!userData) {
                console.log(`Utilisateur avec ID ${userId} introuvable ou aucune transaction associée.`);
                return res.status(404).json({ error: "Utilisateur introuvable ou aucune transaction pour cette période." });
            }

            console.log(`Utilisateur trouvé avec transactions : ${JSON.stringify(userData)}`);

            // trier les données recues

            // USER
            const user =
                {
                    name: userData.name,
                    email: userData.email,
                    password: userData.password,
                    createdAt: userData.createdAt,
                }

            // TRANSACTIONS
            const transactions = []
                userData.transactions.forEach(transaction => {
                transactions.push(transaction.toJSON());
            });

            // Objet pour stocker les transactions regroupées par catégorie
            const groupedTransactions = {};

            // Parcours de chaque transaction
            transactions.forEach(transaction => {
                // Accéder à l'identifiant de la catégorie via la sous-catégorie
                const categoryId = transaction.subcategory.categoryId;

                console.log(categoryId);



                // Ajouter switch et const pour trier les 12 catégories.




            });

            // Affichage des transactions triées par catégorie
            console.log(groupedTransactions);


            res.status(200).render('./pages/dashboard', {

            });

        } catch (error) {
            console.error('Erreur lors du rendu du tableau de bord:', error);
            res.status(500).send('Erreur serveur');
        }
    }
};

module.exports = dashboardController;