import express from "express";
import { getBook } from "../controllers/BookController.js";

const router = express.Router();

router.get("/", getBook);

export default router;
