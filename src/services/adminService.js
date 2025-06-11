const { News, Consultation, Cost } = require('../models')
const ErrorResponse = require('../utils/errorResponse')

// Router: /api/admin/news
// Description: Create news
exports.createNews = async (news, image) => {
    const { title, description, body } = news
    const newData = await News.create({ title, description, body, image })

    return { success: true, message: 'New news created successfully', data: newData }
}

// Router: /api/admin/news
// Description: Get all news
exports.getNews = async () => {
    const news = await News.find()
    return { success: true, data: news }
}

// Router: /api/admin/news/:id
exports.getNew = async (newsId) => {
    const news = await News.findById(newsId)
    if (!news) throw new ErrorResponse('News not found', 404);

    return { success: true, data: news }
}

// Router: /api/admin/consultations
// Description: Get all consultations
exports.getConsultations = async () => {
    const consultations = await Consultation.find()
    return { success: true, data: consultations }
}

// Router: /api/admin/consultations/:id
// Description: Get consultation by id
exports.getConsultation = async (consultId) => {
    const consultation = await Consultation.findById(consultId)
    if (!consultation) throw new ErrorResponse('Consultation not found', 404);

    return { success: true, data: consultation }
}

// Router: /api/admin/costs
// Description: Get all costs
exports.getCosts = async () => {
    const costs = await Cost.find()
    return { success: true, data: costs }
}

// Router: /api/admin/costs/:id
// Description: Get cost by id
exports.getCost = async (costId) => {
    const cost = await Cost.findById(costId)
    if (!cost) throw new ErrorResponse('Cost not found', 404);

    return { success: true, data: cost }
}