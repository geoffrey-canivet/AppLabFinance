const router = require('express').Router();
const abonnementCOntroller = require('../controllers/abonnement.controller');

router.get('/', abonnementCOntroller.findAll);
router.post('/addItem', abonnementCOntroller.create)
router.delete('deleteItem/:id', (req, res) => {})
router.patch('updateItem/:id', (req, res) => {})

module.exports = router;