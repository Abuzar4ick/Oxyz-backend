const { SocialMedia } = require('../models')

// Router: /api/social-media
exports.getSocialMediaLinks = async () => {
    const links = await SocialMedia.findOne()
    return { success: true, links }
}