const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.findAll)
router.post('/addAll', userController.createMany)
router.get('/getAll/:userId', userController.getUserDataByPeriod)
router.put('/:id', (req, res) => {})




module.exports = router;