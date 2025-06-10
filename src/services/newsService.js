const { News } = require('../models')
const ErrorResponse = require('../utils/errorResponse')

// Router: /api/news
// Description: Get all news
exports.getNews = async () => {
    const news = await News.find()
    return { success: true, data: news }
}

// Router: /api/news/:id
// Description: Get news by id
exports.getNew = async (newsId) => {
    const news = await News.findById(newsId)
    if (!news) return new ErrorResponse('News not found', 404);

    return { success: true, data: news }
}