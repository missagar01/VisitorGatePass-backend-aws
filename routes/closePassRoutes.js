import express from "express";
import {
    getGatePasses,
    closeGatePass
} from "../controllers/closePassController.js";

const router = express.Router();

router.get("/", getGatePasses);
router.patch("/:id", closeGatePass);

export default router;
