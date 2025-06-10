const { Router } = require('express')
const router = Router()
// controller
const { newCost } = require('../controllers/costController')
// validators
const { costValidator } = require('../validators/costValidator')

router.post('/cost', costValidator, newCost)

module.exports = router