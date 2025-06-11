const jwt = require('jsonwebtoken')
const ErrorResponse = require('../utils/errorResponse')

exports.verifyAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return next(new ErrorResponse('Token is required', 401))

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded.role !== 'admin') return next(new ErrorResponse('You are not admin :(', 403));

        req.admin = decoded
        next()
    } catch (err) {
        console.log(`Admin verifying error: ${err}`)
        return next(new ErrorResponse('Invalid or expired token', 403))
    }
}