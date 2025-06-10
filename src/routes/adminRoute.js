const { Router } = require('express')
const router = Router()
// controller
const { newNews, allNews, allConsultations, oneConsultation, allCosts, oneCost } = require('../controllers/adminController')
// image upload
const upload = require('../utils/fileUpload')
// validators
const { newsValidator } = require('../validators/adminValidators')

router.post('/news', newsValidator, upload.single('image'), newNews)
router.get('/news', allNews)
router.get('/consultations', allConsultations)
router.get('/consultations/:id', oneConsultation)
router.get('/costs', allCosts)
router.get('/costs/:id', oneCost)

module.exports = router