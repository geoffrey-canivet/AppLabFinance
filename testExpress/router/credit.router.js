const router = require('express').Router();
const creditController = require('../controllers/credit.controller');

router.get('/', creditController.findAll) // findAll
router.post('/addItem', creditController.create) // Create
router.delete('/deleteItem/:id', creditController.destroy) // Delete

module.exports = router;