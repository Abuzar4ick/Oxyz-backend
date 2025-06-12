const { Router } = require('express')
const router = Router()
// controller
const { newConsultation } = require('../controllers/consultationController')

router.post('/consultations', newConsultation)

module.exports = router