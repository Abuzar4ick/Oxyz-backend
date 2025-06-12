const { model, Schema } = require("mongoose")
const bcrypt = require('bcryptjs')

const Admin = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 6,
    }
  }
)

// Hashing the password
Admin.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

// Compare the password
Admin.methods.comparePassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password)
}

module.exports = model("Admin", Admin)
