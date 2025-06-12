const ErrorResponse = require('../utils/errorResponse')
const generateToken = require('../utils/generateToken')
const { Admin } = require('../models')

const { DEFAULT_ADMIN_PASSWORD, DEFAULT_ADMIN_USERNAME } = process.env

// Router: /api/admin/auth
exports.adminAuth = async (adminData) => {
    const { username, password } = adminData

    let findAdmin = await Admin.findOne()
    if (!findAdmin) {
        findAdmin = await Admin.create({
            username: DEFAULT_ADMIN_USERNAME,
            password: DEFAULT_ADMIN_PASSWORD
        })
    }

    const isMatch = await findAdmin.comparePassword(password)
    if (!isMatch || username !== findAdmin.username) throw new ErrorResponse('Invalid credentials', 401);

    const token = generateToken({ role: 'admin', username: findAdmin.username })
    return { success: true, message: 'Admin authorization was successfully', token }
}


// Router: /api/admin/change-password
exports.changePassword = async (passwords) => {
    const { oldUsername, newUsername, oldPassword, newPassword } = passwords
    
    const admin = await Admin.findOne({ username: oldUsername })
    if (!admin) throw new ErrorResponse('Admin not found', 404);

    const isMatch = await admin.comparePassword(oldPassword)
    if (!isMatch) throw new ErrorResponse('Old password is incorrect', 401);

    admin.username = newUsername || admin.username
    admin.password = newPassword
    await admin.save()

    return { success: true, message: 'Password and/or username updated successfully' }
}