const fs = require('fs')
const path = require('path')
const axios = require('axios')

module.exports = function (app) {
  const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}`
  const USERS_FILE = path.join(__dirname, 'userChats.json')
  

  function saveUser(chatId) {
    let users = []
    if (fs.existsSync(USERS_FILE)) {
      users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'))
    } else {
      fs.writeFileSync(USERS_FILE, '[]')
    }

    if (!users.includes(chatId)) {
      users.push(chatId)
      fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))
    }
  }

  app.post(`/webhook/${process.env.TELEGRAM_TOKEN}`, async (req, res) => {
    const message = req.body.message

    if (!message || !message.chat || !message.chat.id) {
      return res.sendStatus(200)
    }

    const chatId = message.chat.id
    const username = message.from.username || message.from.first_name || 'Foydalanuvchi'

    if (message.text === '/start') {
      console.log("Hello")
      saveUser(chatId)

      try {
        await axios.post(`${TELEGRAM_API}/sendMessage`, {
          chat_id: chatId,
          text: `Salom, ${username}! Siz muvaffaqiyatli obuna bo‘ldingiz.`
        })
      } catch (err) {
        console.error(`❌ Xabar yuborishda xatolik: ${err.message}`)
      }
    }

    res.sendStatus(200)
  })
}
