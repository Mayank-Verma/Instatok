import express from "express";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import likeRoutes from "./routes/likeRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import followRoutes from "./routes/followRoutes.js";
import cors from "cors";

const app = express();
// Use CORS middleware
// app.use(cors());
app.use(
  cors({
    origin: "*", // or use '*' to allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
    credentials: true,
  })
);
// Error Handling Middleware
app.use(errorHandler);

// Handle preflight requests
app.options("*", cors());

app.use(express.json());
app.use(cookieParser());
// Routes
app.use("/api/v1", postRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", likeRoutes);
app.use("/api/v1", commentRoutes);
app.use("/api/v1", followRoutes);

export default app;
