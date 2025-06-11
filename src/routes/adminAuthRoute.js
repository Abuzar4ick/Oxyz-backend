const { Router } = require('express')
const router = Router()
// controller
const { login, changePassword } = require('../controllers/adminAuthController')
// admin authorization
const { verifyAdmin } = require('../middlewares/authMiddleware')

router.post('/auth', login)
router.post('/change-password', verifyAdmin, changePassword)

module.exports = router