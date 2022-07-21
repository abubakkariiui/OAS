import asyncHandler from "express-async-handler";
import FeedBack from "../models/feedBackModel.js";

const feedBackPost = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  const feedData = await FeedBack.create({
    name,
    email,
    message,
  });

  if (feedData) {
    res.status(201).json({
      _id: feedData._id,
      name: feedData.name,
      email: feedData.email,
      message: feedData.message,
    });
  } else {
    res.status(400);
    throw new Error("feedback not Saved");
  }
});

const getAllFeedBack = asyncHandler(async (req, res) => {
  const feedData = await FeedBack.find();
  res.json(feedData);
});

export {feedBackPost,getAllFeedBack};