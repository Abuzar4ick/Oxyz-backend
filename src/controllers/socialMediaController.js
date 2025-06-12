const { socialMediaService } = require('../services')
const asyncHandler = require('../utils/asyncHandler')

// Router: /api/social-media
// Method: GET
exports.allLinks = asyncHandler(async (req, res, next) => {
    const response = await socialMediaService.getSocialMediaLinks()
    res.status(200).json(response)
})