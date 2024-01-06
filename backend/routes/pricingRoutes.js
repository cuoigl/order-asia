import express from "express";
const router = express.Router();

import {
  getPricing,
  getPricingById,
  updatePricing,
  createPricing,
} from "../controllers/pricingController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getPricing).post(protect, admin, createPricing);
router.route("/:id").get(getPricingById).put(protect, admin, updatePricing);

export default router;
