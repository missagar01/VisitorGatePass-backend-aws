import express from "express";
import {
    getVisitsForApproval,
    updateVisitApproval
} from "../controllers/approveController.js";

const router = express.Router();

router.get("/", getVisitsForApproval);
router.patch("/:id", updateVisitApproval);

export default router;
