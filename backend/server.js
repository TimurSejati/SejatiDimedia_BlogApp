import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors"; //
import {
  errorResponseHandler,
  invalidPathHandler,
} from "./middleware/errorHandler.js";

// Routes
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/users", userRoutes);
app.use(invalidPathHandler);
app.use(errorResponseHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
