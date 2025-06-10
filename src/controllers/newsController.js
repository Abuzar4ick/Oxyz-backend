const asyncHandler = require('../utils/asyncHandler')
const { newsService } = require('../services')

// Router: /api/news
// Method: GET
exports.allNews = asyncHandler(async (req, res, next) => {
    const response = await newsService.getNews()
    res.status(200).json(response)
})

// Router: /api/news/:id
// Method: GET
exports.oneNew = asyncHandler(async (req, res, next) => {
    const response = await newsService.getNew(req.params.id)
    res.status(200).json(response)
})