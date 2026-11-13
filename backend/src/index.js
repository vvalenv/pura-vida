import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/.well-known/appspecific/com.chrome.devtools.json", (req, res) =>
  res.sendStatus(204)
);

app.listen(process.env.PORT || 3000, () =>
  console.log(`API en http://localhost:${process.env.PORT || 3000}`)
);