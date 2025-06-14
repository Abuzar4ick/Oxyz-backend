const { model, Schema } = require('mongoose')

const SocialMedia = new Schema({
    whatsapp: {
        type: String,
        default: null
    },
    telegram: {
        type: String,
        default: null
    },
    facebook: {
        type: String,
        default: null
    },
    instagram: {
        type: String,
        default: null
    }
})

module.exports = model('SocialMedia', SocialMedia)