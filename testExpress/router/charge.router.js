const router = require('express').Router();
const chargeController = require('../controllers/charge.controller');


router.get('/', chargeController.findAll) // findAll
router.post('/addItem', chargeController.create) // Create
router.delete('/deleteItem/:id', chargeController.destroy) // Delete
router.patch('/updateItem/:id', chargeController.update) // Update

// recharge card charges
router.get('/recharge-card-charges', chargeController.reloadCharge)

module.exports = router;