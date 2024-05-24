const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookname: {
      type: String,
      required: true,
    },
    author_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    published_year: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
