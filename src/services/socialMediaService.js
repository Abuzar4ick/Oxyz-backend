const { SocialMedia } = require('../models')
const ErrorResponse = require('../utils/errorResponse')

// Router: /api/social-media
exports.getSocialMediaLinks = async () => {
    const links = await SocialMedia.find()
    return { success: true, data: links }
}