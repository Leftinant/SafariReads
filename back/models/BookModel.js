import mongoose from "mongoose";

const listItemSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

export default mongoose.model("ListItem", listItemSchema);
