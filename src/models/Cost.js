const { Schema, model } = require("mongoose")

const Cost = new Schema(
  {
    where: {
      type: String,
      required: [true, "The product place is required"]
    },
    to: {
      type: String,
      required: [true, "The product destination is required"]
    },
    kind: {
      type: String,
      required: [true, "Kind of product is required"]
    },
    weight: {
      type: String,
      required: [true, "Weight of product is required"]
    },
    transport_type: {
      type: String,
      required: [true, "Type of transport is requried"]
    },
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

module.exports = model('Cost', Cost)