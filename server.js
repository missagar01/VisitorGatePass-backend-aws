import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import requestVisitRoutes from "./routes/requestRoutes.js";
import approveRoutes from "./routes/approveRoutes.js";
import closePassRoutes from "./routes/closePassRoutes.js";
import personRoutes from "./routes/personRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";


dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/visits", requestVisitRoutes);
app.use("/api/approval", approveRoutes);
app.use("/api/gatepass", closePassRoutes);
app.use("/api/persons", personRoutes);

app.use(errorHandler);

// health check
app.get("/", (req, res) => {
    res.json({ status: "OK", message: "Visitor Management API running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
