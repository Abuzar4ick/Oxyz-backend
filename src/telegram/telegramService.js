const fs = require('fs')
const path = require('path')
const axios = require('axios')

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`
const USERS_FILE = path.join(__dirname, 'userChats.json')
const GROUP_CHAT_ID = process.env.TELEGRAM_GROUP_ID

const telegramService = async (data, isConsultation) => {
  const safe = (val) => val || "Ko‘rsatilmagan"
  let text = ``

  if (isConsultation === true) {
    text = `📝 Yangi konsultatsiya:\n` +
           `👤 Ism: ${safe(data.username)}\n` +
           `📞 Telefon: ${safe(data.phone_number)}`
  } else {
    text = `📝 Yangi buyurtma:\n` +
           `👤 Ism: ${safe(data.username)}\n` +
           `📞 Telefon: ${safe(data.phone_number)}\n` +
           `📍 Qayerdan: ${safe(data.where)}\n` +
           `📍 Qayerga: ${safe(data.to)}\n` +
           `📦 Maxsulot turi: ${safe(data.kind)}\n` +
           `⚖️ Maxsulot og'irligi: ${safe(data.weight)}\n` +
           `🚚 Transport turi: ${safe(data.transport_type)}`
  }

  let users = []
  if (fs.existsSync(USERS_FILE)) {
    users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'))
  }

  const sendMessage = async (chatId) => {
    try {
      await axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: chatId,
        text,
      })
    } catch (err) {
      console.error(`❌ Xatolik: ${chatId} => ${err.message}`)
    }
  }

  // Foydalanuvchilarga yuborish
  for (const chatId of users) {
    await sendMessage(chatId)
  }

  // Guruhga yuborish
  await sendMessage(process.env.GROUP_CHAT_ID)
  console.log("✅ Guruhga xabar yuborildi")
}

module.exports = telegramService
