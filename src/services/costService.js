const { Cost } = require('../models')
const telegramService = require('../telegram/telegramService')

// Router: /api/cost
// Description: Create a form to calculate the cost of the service
exports.createCost = async (data) => {
    const { where, to, kind, weight, transport_type, username, phone_number } = data

    telegramService({ where, to, kind, weight, transport_type, username, phone_number }, false)
    const newCost = await Cost.create({ where, to, kind, weight, transport_type, username, phone_number })

    return { success: true, message: 'New cost was successfully created', data: newCost }
}