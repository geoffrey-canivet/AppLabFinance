const router = require('express').Router();
const assuranceController = require('../controllers/assurance.controller');

router.get('/', assuranceController.findAll)
router.post('/addItem', assuranceController.create)
router.delete('/deleteItem/:id', (req, res) => {})
router.patch('/updateItem/:id', (req, res) => {})

// recharge card charges
router.get('/recharge-card-charges', (req, res) => {})

module.exports = router