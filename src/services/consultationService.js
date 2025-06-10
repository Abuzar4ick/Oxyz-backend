const ErrorResponse = require('../utils/errorResponse')
const { Consultation } = require('../models')

// Router: /api/consultations
// Description: Create new consultation
exports.createConsultation = async (consultation) => {
    const { username, phone_number } = consultation

    const newConsultation = await Consultation.create({ username, phone_number })
    return { success: true, message: 'New consultation was created successfully', data: newConsultation }
}