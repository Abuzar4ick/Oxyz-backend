const { Consultation } = require('../models')
const telegramService = require('../telegram/telegramService')

// Router: /api/consultations
// Description: Create new consultation
exports.createConsultation = async (consultation) => {
    const { username, phone_number } = consultation

    telegramService({ username, phone_number }, true)
    const newConsultation = await Consultation.create({ username, phone_number })

    return { success: true, message: 'New consultation was created successfully', data: newConsultation }
}