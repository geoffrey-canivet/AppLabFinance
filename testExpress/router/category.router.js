const router = require('express').Router();
const categoryController = require("../controllers/category.controller");
router.get('/', categoryController.findAll)
router.get('/getSubcat/:id', categoryController.getSubCategory)
router.post('/', categoryController.create)
router.post('/addAll', categoryController.createMany)
router.delete('/:id', (req, res) => {})
router.put('/:id', (req, res) => {})

module.exports = router;