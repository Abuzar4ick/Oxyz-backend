const { Router } = require('express')
const router = Router()
// controller
const { newNews, allNews, oneNew, allConsultations, oneConsultation, allCosts, oneCost, newLinks, allLinks } = require('../controllers/adminController')
// image upload
const upload = require('../utils/fileUpload')
// admin authorization
const { verifyAdmin } = require('../middlewares/authMiddleware')

router.post('/news', verifyAdmin, upload.single('image'), newNews)
router.get('/news', verifyAdmin, allNews)
router.get('/news/:id', verifyAdmin, oneNew)
router.get('/consultations', verifyAdmin, allConsultations)
router.get('/consultations/:id', verifyAdmin, oneConsultation)
router.get('/costs', verifyAdmin, allCosts)
router.get('/costs/:id', verifyAdmin, oneCost)
router.post('/social-media', upload.none(), verifyAdmin, newLinks)
router.get('/social-media', verifyAdmin, allLinks)

module.exports = router