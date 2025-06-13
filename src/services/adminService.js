const { News, Consultation, Cost, SocialMedia } = require('../models')
const ErrorResponse = require('../utils/errorResponse')
const fs = require('fs')
const path = require('path')

// Router: /api/admin/news
// Description: Create news
exports.createNews = async (news, image) => {
    const { title, description, body } = news
    const newData = await News.create({ title, description, body, image })

    return { success: true, message: 'New news created successfully', data: newData }
}

// Router: /api/admin/news/:id
// Description: Update news by id
exports.updateNews = async (newsId, news, image) => {
    const { title, description, body } = news

    const oldNews = await News.findById(newsId)
    if (!oldNews) throw new ErrorResponse('News not found', 404);

    if (image && oldNews.image && oldNews.image !== image) {
        const imagePath = path.join(__dirname, '..', 'uploads', oldNews.image)
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath)
        }
    }

    const updatedNews = await News.findByIdAndUpdate(newsId, { title, description, body, image }, { new: true })

    return { success: true, message: 'News were successfully updated', data: updatedNews }
}

// Router: /api/admin/news/:id
// Description: Delete news by id
exports.deleteNews = async (newsId) => {
    const deletedNews = await News.findByIdAndDelete(newsId)
    if (!deletedNews) throw new ErrorResponse('News not found', 404);

    if (deletedNews.image) {
        const imagePath = path.join(__dirname, '..', 'uploads', deletedNews.image)
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath)
        }
    }

    return { success: true, message: 'News were deleted successfully' }
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
    const oldLinks = await SocialMedia.find()
    
    if (oldLinks.length > 0) {
        await SocialMedia.findByIdAndUpdate(oldLinks[0]._id, { whatsapp, telegram, instagram, facebook })
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