const asyncHandler = require('../utils/asyncHandler')
const { adminService } = require('../services')

// Router: /api/news
// Method: POST
exports.newNews = asyncHandler(async (req, res, next) => {
    const response = await adminService.createNews(req.body, req.file.filename)
    res.status(201).json(response)
})

// Router: /api/news
// Method: GET
exports.allNews = asyncHandler(async (req, res, next) => {
    const response = await adminService.getNews()
    res.status(200).json(response)
})

// Router: /api/consultations
// Method: GET
exports.allConsultations = asyncHandler(async (req, res, next) => {
    const response = await adminService.getConsultations()
    res.status(200).json(response)
})

// Router: /api/consultations/:id
// Method: GET
exports.oneConsultation = asyncHandler(async (req, res, next) => {
    const response = await adminService.getConsultation(req.params.id)
    res.status(200).json(response)
})

// Router: /api/costs
// Method: GET
exports.allCosts = asyncHandler(async (req, res, next) => {
    const response = await adminService.getCosts()
    res.status(200).json(response)
})

// Router: /api/costs/:id
// Method: GET
exports.oneCost = asyncHandler(async (req, res, next) => {
    const response = await adminService.getCost(req.params.id)
    res.status(200).json(response)
})