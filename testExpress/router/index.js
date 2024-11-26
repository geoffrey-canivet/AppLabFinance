const router = require('express').Router()
const dashboardRouter = require('./dashboard.router')
const subcategoryRouter = require('./subcategory.router')
const categoryRouter = require('./category.router')

router.use('/subcategories', subcategoryRouter)
router.use('/dashboard', dashboardRouter)
router.use('/categories', categoryRouter)
module.exports = router