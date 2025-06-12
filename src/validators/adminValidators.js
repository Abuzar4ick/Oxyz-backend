const { validationResult, body } = require('express-validator')

// Router: /api/news
exports.newsValidator = [
    body('title')
        .notEmpty().withMessage('News title is required'),
    body('description')
        .notEmpty().withMessage('News description is required'),
    body('body')
        .notEmpty().withMessage('News body information is required'),
    body('image')
        .notEmpty().withMessage('News image is required'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() })
        }
        next()
    }
]
