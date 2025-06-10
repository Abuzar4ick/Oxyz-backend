const { Router } = require('express')
const router = Router()
// controller
const { newConsultation } = require('../controllers/consultationController')
// validators
const { consultationValidator } = require('../validators/consultationValidator')

router.post('/consultations', consultationValidator, newConsultation)

module.exports = router