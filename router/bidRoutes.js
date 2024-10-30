import express from "express";
import { placeBid } from "../controllers/bidController.js";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import { checkAuctionEndtime } from "../middlewares/checkAuctionEndTime.js";

const router = express.Router();

router.post(
  "/place/:id",
  isAuthenticated,
  isAuthorized("Bidder"),
  checkAuctionEndtime,
  placeBid
);

export default router;
