import mongoose from "mongoose";

const listItemSchema = new mongoose.Schema({
  title: String,
  author: String,
  rating: Number,
  category: String,
  image: String,
  price: Number,
});

export default mongoose.model("books", listItemSchema);
