import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: String,
  title: String,
  author: String,
  price: String,
});

export default mongoose.model("cart", cartSchema);
