const router = require('express').Router()
const chargeRouter = require('./charge.router')
const dashboardRouter = require('./dashboard.router')

router.use('/charges', chargeRouter)
router.use('/dashboard', dashboardRouter)

module.exports = router