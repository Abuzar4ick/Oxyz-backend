const { rateLimit } = require('express-rate-limit')

exports.adminAuthLimiter = rateLimit({
    windowMs: 25 * 60 * 1000,
    limit: 5,
    message: {
        success: false,
        message: 'Too many login attempts. Please try again after 25 minutes.'
    },
    standardHeaders: true,
    legacyHeaders: false
})

exports.changePasswordLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 3,
    message: {
        success: false,
        message: 'Too many login attempts. Please try again after 25 minutes.'
    },
    standardHeaders: true,
    legacyHeaders: false
})