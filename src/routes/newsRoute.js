const { Router } = require('express')
const router = Router()
// controller
const { allNews, oneNew } = require('../controllers/newsController')

router.get('/news', allNews)
router.get('/news/:id', oneNew)

module.exports = router