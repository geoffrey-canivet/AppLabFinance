const router = require('express').Router();
const subcategoryController = require('../controllers/subcategory.controller');

router.get('/', subcategoryController.findAll)
router.post('/', subcategoryController.create)
router.post('/addAll', subcategoryController.createMany)
router.delete('/:id', (req, res) => {})
router.put('/:id', (req, res) => {})

module.exports = router

