const fs = require('fs')
const path = require('path')
const bcrypt = require('bcryptjs')

const adminPath = path.join(__dirname, '..', 'config', 'admin.json')

// .env
const { DEFAULT_ADMIN_PASSWORD, DEFAULT_ADMIN_USERNAME } = process.env

const initAdmin = async () => {
    if (!fs.existsSync(adminPath)) {
        const hashedPassword = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 10)
        const data = {
            username: DEFAULT_ADMIN_USERNAME,
            password: hashedPassword
        }
        fs.writeFileSync(adminPath, JSON.stringify(data, null, 2))
    }
}

module.exports = initAdmin