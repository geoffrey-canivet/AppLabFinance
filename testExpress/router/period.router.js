const router = require('express').Router();

const periodController = require('../controllers/period.controller');

router.get('/', periodController.findAll)
router.post('/addAll', periodController.createMany)
router.delete('/:id', (req, res) => {})
router.put('/:id', (req, res) => {})

module.exports = router