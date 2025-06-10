const asyncHandler = require('../utils/asyncHandler')
const { consultationService } = require('../services')

// Router: /api/consultations
// Method: POST
exports.newConsultation = asyncHandler(async (req, res, next) => {
    const response = await consultationService.createConsultation(req.body)
    res.status(201).json(response)
})