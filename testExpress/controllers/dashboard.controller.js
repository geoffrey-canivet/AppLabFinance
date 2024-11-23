const {Charge,Credit, Assurance, Abonnement} = require('../models');

const dashboardController = {
    renderDashboard: async (req, res) => {
        try {
            // Récupérer toutes les charges
            const charges = await Charge.findAll();
            const credits = await Credit.findAll();
            const assurances = await Assurance.findAll();
            const abonnements = await Abonnement.findAll();
            // Rend la page avec les données
            res.status(200).render('./pages/dashboard', {
                charges,
                credits,
                assurances,
                abonnements

            });
        } catch (error) {
            console.error('Erreur lors du rendu du tableau de bord:', error);
            res.status(500).send('Erreur serveur');
        }
    }
};

module.exports = dashboardController;