const router = require('express').Router()
const chargeRouter = require('./charge.router')
const creditRouter = require('./credit.router')
const dashboardRouter = require('./dashboard.router')
const assuranceRouter = require('./assurance.router')
const abonnementRouter = require('./abonnement.router')

router.use('/charges', chargeRouter)
router.use('/credits', creditRouter)
router.use('/assurances', assuranceRouter)
router.use('/abonnements', abonnementRouter)
router.use('/dashboard', dashboardRouter)

module.exports = router