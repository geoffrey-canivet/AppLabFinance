const router = require('express').Router();
const chargeController = require('../controllers/charge.controller');


router.get('/', chargeController.findAll)
router.post('/addItem', chargeController.create)
router.delete('/deleteItem/:id', chargeController.destroy)
router.patch('/updateItem/:id', chargeController.update)

module.exports = router;