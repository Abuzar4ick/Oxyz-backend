const asyncHandler = require('../utils/asyncHandler')
const { costService } = require('../services')

// Router: /api/cost
// Method: POST
exports.newCost = asyncHandler(async (req, res, next) => {
    const response = await costService.createCost(req.body)
    res.status(201).json(response)
})