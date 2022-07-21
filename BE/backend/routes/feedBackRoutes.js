import express from "express";
import { feedBackPost, getAllFeedBack } from "../controllers/feedBackController.js";

const router = express.Router();


router.route('/create').post(feedBackPost);

router.route('/getFeedbacks').get(getAllFeedBack);

export default router;