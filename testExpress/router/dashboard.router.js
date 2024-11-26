const router = require('express').Router();
const dashboardController = require('../controllers/dashboard.controller');

router.get('/:userId', dashboardController.renderDashboard)

module.exports = router;