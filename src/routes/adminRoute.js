const { Router } = require('express')
const router = Router()
// controller
const { newNews, allNews, allConsultations, oneConsultation, allCosts, oneCost } = require('../controllers/adminController')
// image upload
const upload = require('../utils/fileUpload')
// validators
const { newsValidator } = require('../validators/adminValidators')
// admin authorization
const { verifyAdmin } = require('../middlewares/authMiddleware')

router.post('/news', verifyAdmin, newsValidator, upload.single('image'), newNews)
router.get('/news', verifyAdmin, allNews)
router.get('/consultations', verifyAdmin, allConsultations)
router.get('/consultations/:id', verifyAdmin, oneConsultation)
router.get('/costs', verifyAdmin, allCosts)
router.get('/costs/:id', verifyAdmin, oneCost)

module.exports = router