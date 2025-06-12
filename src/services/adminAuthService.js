const ErrorResponse = require('../utils/errorResponse')
const generateToken = require('../utils/generateToken')
const bcrypt = require('bcryptjs')
const { Admin } = require('../models')

// Router: /api/admin/auth
exports.adminAuth = async (admin) => {
    const { username, password } = admin

    const token = generateToken({ role: 'admin', username })
    return { success: true, message: 'Admin authorization was successfully', token }
}

// Router: /api/admin/change-password
exports.changePassword = async (passwords) => {
    const { oldUsername, newUsername, oldPassword, newPassword } = passwords

    return { success: true, message: 'Password was updated successfully' }
}