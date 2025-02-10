import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import timetableRoutes from "./routes/timetable.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "10mb" })); //allows you to parse body of the request
app.use("/api/auth",authRoutes);
app.use('/api/',timetableRoutes);

app.listen(process.env.PORT||5000, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
})