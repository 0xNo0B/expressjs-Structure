import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./src/config/connectDB.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
