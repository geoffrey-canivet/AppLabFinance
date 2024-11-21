const router = require('express').Router();
const chargeController = require('../controllers/charge.controller');


router.get('/', chargeController.findAll)
router.post('/addItem', chargeController.create)
router.patch('/updateItem', () =>{})

module.exports = router;