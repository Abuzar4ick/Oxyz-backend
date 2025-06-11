const jwt = require('jsonwebtoken')
const { jwtConfig } = require('../config/jwtConfig')

// Generate token after registering
const generateToken = (payload) => {
    return jwt.sign(payload, jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn
    })
}

module.exports = generateToken