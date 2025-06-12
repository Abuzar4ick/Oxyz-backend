const { News, Consultation, Cost, SocialMedia } = require('../models')
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

// Router: /api/admin/social-media
// Description: Create all social-media links
exports.createLinks = async (links) => {
    const { whatsapp, telegram, instagram, facebook } = links
    const oldLinks = await SocialMedia.findOne()
    
    if (oldLinks) {
        await SocialMedia.findByIdAndUpdate(oldLinks._id, { whatsapp, telegram, instagram, facebook })
    } else {
        await SocialMedia.create({ whatsapp, telegram, instagram, facebook })
    }

    return { success: true, message: 'Social media links saved successfully' } 
}

// Router: /api/admin/social-media
// Description: Get all social-media links
exports.getLinks = async () => {
    const links = await SocialMedia.find()
    return { success: true, data: links }
}