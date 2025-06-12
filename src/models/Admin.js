const { model, Schema } = require("mongoose")

const Admin = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"]
    },
    password: {
      type: String,
      requried: [true, "Password is requried"],
      minLength: 6,
    }
  }
)

module.exports = model("Admin", Admin)
