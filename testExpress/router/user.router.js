const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.findAll)
router.post('/addAll', userController.createMany)
router.delete('/:id', (req, res) => {})
router.put('/:id', (req, res) => {})




module.exports = router;