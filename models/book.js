const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, required: true },
  image: { type: String, required: false },
  title: { type: String, required: true },
  buyLink: { type: String, required: false },
  author: { type: Array, required: true },
  description: {type: String, required:false},
  retailPrice: {type: Number, required: false},
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
