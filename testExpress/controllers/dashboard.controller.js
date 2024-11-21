const {Charge} = require('../models');

const dashboardController = {
    renderDashboard: async (req, res) => {
        try {
            // Récupérer toutes les charges
            const charges = await Charge.findAll();

            // Rend la page avec les données
            res.status(200).render('./pages/dashboard', {
                charges
            });
        } catch (error) {
            console.error('Erreur lors du rendu du tableau de bord:', error);
            res.status(500).send('Erreur serveur');
        }
    }
};

module.exports = dashboardController;