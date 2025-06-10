const { model, Schema } = require("mongoose")

const News = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title of new is required"]
    },
    description: {
      type: String,
      required: [true, "Description of new is required"]
    },
    body: {
      type: String,
      required: [true, 'Main information is required']
    },
    image: {
      type: String,
      required: [true, "Image of new is required"]
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("News", News)