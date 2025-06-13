const { model, Schema } = require("mongoose")

const News = new Schema(
  {
    title: {
      uz: { type: String, required: true },
      ru: { type: String, required: true }
    },
    description: {
      uz: { type: String, required: true },
      ru: { type: String, required: true }
    },
    body: {
      uz: { type: String, required: true },
      ru: { type: String, required: true }
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