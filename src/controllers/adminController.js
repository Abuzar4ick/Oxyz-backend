const asyncHandler = require('../utils/asyncHandler')
const { adminService, newsService } = require('../services')

// Router: /api/admin/news
// Method: POST
exports.newNews = asyncHandler(async (req, res, next) => {
    const response = await adminService.createNews(req.body, req.file.filename)
    res.status(201).json(response)
})

// Router: /api/admin/news/:id
// Method: PUT
exports.updateNews = asyncHandler(async (req, res, next) => {
    const image = req.file ? req.file.filename : req.body.existingImage
    const response = await adminService.updateNews(req.params.id, req.body, image)
    res.status(200).json(response)
})

// Router: /api/admin/news/:id
// Methdo: DELETE
exports.deleteNews = asyncHandler(async (req, res, next) => {
    const response = await adminService.deleteNews(req.params.id)
    res.status(200).json(response)
})

// Router: /api/admin/news
// Method: GET
exports.allNews = asyncHandler(async (req, res, next) => {
    const response = await adminService.getNews()
    res.status(200).json(response)
})

// Router: /api/admin/news/:id
exports.oneNew = asyncHandler(async (req, res, next) => {
    const response = await newsService.getNew(req.params.id)
    res.status(200).json(response)
})

// Router: /api/admin/consultations
// Method: GET
exports.allConsultations = asyncHandler(async (req, res, next) => {
    const response = await adminService.getConsultations()
    res.status(200).json(response)
})

// Router: /api/admin/consultations/:id
// Method: GET
exports.oneConsultation = asyncHandler(async (req, res, next) => {
    const response = await adminService.getConsultation(req.params.id)
    res.status(200).json(response)
})

// Router: /api/admin/costs
// Method: GET
exports.allCosts = asyncHandler(async (req, res, next) => {
    const response = await adminService.getCosts()
    res.status(200).json(response)
})

// Router: /api/admin/costs/:id
// Method: GET
exports.oneCost = asyncHandler(async (req, res, next) => {
    const response = await adminService.getCost(req.params.id)
    res.status(200).json(response)
})

// Router: /api/admin/social-media
// Method: POST
exports.newLinks = asyncHandler(async (req, res, next) => {
    console.log(req.body)
    const response = await adminService.createLinks(req.body)
    res.status(201).json(response)
})

// Router: /api/admin/social-media
// Method: GET
exports.allLinks = asyncHandler(async (req, res, next) => {
    const response = await adminService.getLinks()
    res.status(200).json(response)
})