const router = require('express').Router()
const dashboardRouter = require('./dashboard.router')
const subcategoryRouter = require('./subcategory.router')
const categoryRouter = require('./category.router')
const periodRouter = require('./period.router')
const userRouter = require('./user.router')
const transactionsRouter = require('./transaction.router')

router.use('/transactions', transactionsRouter)
router.use('/users', userRouter)
router.use('/periods', periodRouter)
router.use('/subcategories', subcategoryRouter)
router.use('/dashboard', dashboardRouter)
router.use('/categories', categoryRouter)

module.exports = router