const router = require('express').Router();
const transactionController = require('../controllers/transaction.controller');

router.get('/', transactionController.findAll)
router.post('/', transactionController.create);
router.post('/addAll', transactionController.createMany);
router.delete('/', (req, res) => {})
router.put('/:id', (req, res) => {})

module.exports = router