import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./routes/BookRoutes.js";
import userRoute from "./routes/UserRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  // "https://your-frontend-domain.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

dotenv.config();

app.use("/api/book", bookRoute);
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("🚀 Server is up and running!");
});

app.use((err, req, res, next) => {
  console.error("❌ Server error:", err.stack);
  res.status(500).json({ error: "Something went wrong on the server." });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is up and running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("❌ MongoDB connection error:", err));
