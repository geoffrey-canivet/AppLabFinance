const router = require('express').Router()
const dashboardRouter = require('./dashboard.router')

router.use('/dashboard', dashboardRouter)

module.exports = router