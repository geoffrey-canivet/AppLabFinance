const router = require('express').Router();
const transactionController = require('../controllers/transaction.controller');

router.get('/', transactionController.findAll)
router.delete('/:id', (req, res) => {})
router.put('/:id', (req, res) => {})

module.exports = router