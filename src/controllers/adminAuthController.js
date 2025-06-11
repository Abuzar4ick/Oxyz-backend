const asyncHandler = require('../utils/asyncHandler')
const { adminAuthService } = require('../services')

// Router: /api/admin/auth
// Method: POST
exports.login = asyncHandler(async (req, res, next) => {
    const response = await adminAuthService.adminAuth(req.body)
    res.status(200).json(response)
})

// Router: /api/admin/change-password
// Method: POST
exports.changePassword = asyncHandler(async (req, res, next) => {
    const response = await adminAuthService.changePassword(req.body)
    res.status(200).json(response)
})