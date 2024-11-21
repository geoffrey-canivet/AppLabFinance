const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).render('./pages/dashboard');
})

router.post('/send-data', (req, res) => {
    const { data } = req.body;
    console.log('Donnée reçue:', data);
    // Traitez ici la donnée reçue comme vous le souhaitez
    res.status(200).json({ message: 'Donnée reçue avec succès' });
})

module.exports = router;