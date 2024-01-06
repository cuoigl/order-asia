import express from "express";
const router = express.Router();
import {
  getNews,
  createNew,
  updateNew,
  deleteNew,
  getNewsCustomer,
  getNewsTransport,
  getNewsGoods,
  getNewById,
} from "../controllers/newController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getNews).post(protect, admin, createNew);
router.route("/newscustomer").get(getNewsCustomer);
router.route("/newstransport").get(getNewsTransport);
router.route("/newsgoods").get(getNewsGoods);
router.route("/:id").get(getNewById).put(protect, admin, updateNew);
router.route("/:id").delete(protect, admin, deleteNew);

export default router;
