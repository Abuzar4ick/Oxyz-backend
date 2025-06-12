const { Router } = require('express')
const router = Router()
// controller
const { newCost } = require('../controllers/costController')

router.post('/cost', newCost)

module.exports = router