const { Router } = require('express')
const router = Router()
// controller
const { allLinks } = require('../controllers/socialMediaController')

router.get('/social-media', allLinks)

module.exports = router