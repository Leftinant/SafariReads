import express from "express";
import CartItem from "../models/CartModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await CartItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
