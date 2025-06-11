// .env
const { JWT_SECRET, JWT_EXPIRES_IN } = process.env

exports.jwtConfig = {
    secret: JWT_SECRET,
    expiresIn: JWT_EXPIRES_IN
}