const { model, Schema } = require('mongoose')

const SocialMedia = new Schema({
    whatsapp: {
        type: String,
        required: [true, 'Whatsapp link is required']
    },
    telegram: {
        type: String,
        requried: [true, 'Telegram link is required']
    },
    facebook: {
        type: String,
        required: [true, 'Facebook link is requried']
    },
    instagram: {
        type: String,
        required: [true, 'Instagram link is requried']
    }
})

module.exports = model('SocialMedia', SocialMedia)