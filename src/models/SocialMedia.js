const { model, Schema } = require('mongoose')

const SocialMedia = new Schema({
    whatsapp: {
        type: String,
        default: ''
    },
    telegram: {
        type: String,
        default: ''
    },
    facebook: {
        type: String,
        default: ''
    },
    instagram: {
        type: String,
        default: ''
    }
})

module.exports = model('SocialMedia', SocialMedia)