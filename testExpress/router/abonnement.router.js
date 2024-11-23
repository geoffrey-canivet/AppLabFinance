const router = require('express').Router();
const abonnementCOntroller = require('../controllers/abonnement.controller');

router.get('/', abonnementCOntroller.findAll);
router.post('/addItem', abonnementCOntroller.create)
router.delete('/:id', (req, res) => {})
router.patch('/:id', (req, res) => {})

module.exports = router;