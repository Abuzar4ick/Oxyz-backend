const { validationResult, body } = require('express-validator')

// Router: /api/costs
exports.costValidator = [
    body('where')
        .notEmpty().withMessage("Product location 'where' is required"),
    body('to')
        .notEmpty().withMessage("Destination place 'to' is required"),
    body('kind')
        .notEmpty().withMessage('Products kind is required'),
    body('weight')
        .notEmpty().withMessage('Products weight is required'),
    body('transport_type')
        .notEmpty().withMessage('Transports type is required'),
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