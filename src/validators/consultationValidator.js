const { validationResult, body } = require('express-validator')

// Router: /api/consultations
exports.consultationValidator = [
    body('username')
        .notEmpty().withMessage('Username is required'),
    body('phone_number')
        .notEmpty().withMessage('Phone number is required'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });
        next()
    }
]