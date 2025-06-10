const { model, Schema } = require("mongoose")

const Consultation = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required :("]
    },
    phone_number: {
      type: String,
      required: [true, "Phone number is required :("],
      validate: [
        {
          validator: function (phone_number) {
            return phone_number.startsWith("+998")
          },
          message: "Phone number must start with +998"
        },
        {
          validator: function (phone_number) {
            return phone_number.length === 13
          },
          message: "Phone number must have 13 characters"
        }
      ]
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("Consultation", Consultation)