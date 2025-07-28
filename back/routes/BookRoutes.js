import express from "express";
import ListItem from "../models/BookModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await ListItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
