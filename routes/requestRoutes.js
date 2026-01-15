import express from "express";
import upload from "../middleware/s3upload.js";
import { createVisitRequest, getAllVisitsForAdmin } from "../controllers/requestController.js";

const router = express.Router();

router.post("/", upload.single("photoData"), createVisitRequest);
// router.post("/", createVisitRequest);
router.get("/admin", getAllVisitsForAdmin);

export default router;
