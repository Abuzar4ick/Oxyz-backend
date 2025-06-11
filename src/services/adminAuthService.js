const ErrorResponse = require('../utils/errorResponse')
const generateToken = require('../utils/generateToken')
const fs = require('fs')
const path = require('path')
const bcrypt = require('bcryptjs')
const adminPath = path.join(__dirname, '..', 'config', 'admin.json')

// Router: /api/admin/auth
exports.adminAuth = async (admin) => {
    const { username, password } = admin
    const adminData = JSON.parse(fs.readFileSync(adminPath, 'utf-8'))

    if (adminData.username !== username) throw new ErrorResponse('Incorrect login', 401);

    const isMatch = await bcrypt.compare(password, adminData.password)
    if (!isMatch) throw new ErrorResponse('Incorrect password', 401);

    const token = generateToken({ role: 'admin', username })
    return { success: true, message: 'Admin authorization was successfully', token }
}

// Router: /api/admin/change-password
exports.changePassword = async (passwords) => {
    const { oldUsername, newUsername, oldPassword, newPassword } = passwords
    const adminData = JSON.parse(fs.readFileSync(adminPath, 'utf-8'))

    if (adminData.username !== oldUsername) throw new ErrorResponse('Incorrect old username', 401);

    const isMatch = await bcrypt.compare(oldPassword, adminData.password)
    if (!isMatch) throw new ErrorResponse('Incorrect old password', 401);

    const hashedPassword = await bcrypt.hash(newPassword, 10)
    adminData.password = hashedPassword
    adminData.username = newUsername
    fs.writeFileSync(adminPath, JSON.stringify(adminData, null, 2))

    return { success: true, message: 'Password was updated successfully' }
}