const { Router } = require('express')
const router = Router()
// controller
const { login, changePassword } = require('../controllers/adminAuthController')
// admin authorization
const { verifyAdmin } = require('../middlewares/authMiddleware')
// route limitter
const { adminAuthLimiter, changePasswordLimiter } = require('../middlewares/rateLimiter')

router.post('/auth', adminAuthLimiter, login)
router.post('/change-password', changePasswordLimiter, verifyAdmin, changePassword)

module.exports = router