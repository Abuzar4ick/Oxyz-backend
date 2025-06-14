const { SocialMedia } = require('../models')

// Router: /api/social-media
exports.getSocialMediaLinks = async () => {
    const links = await SocialMedia.find()
    return { success: true, links }
}