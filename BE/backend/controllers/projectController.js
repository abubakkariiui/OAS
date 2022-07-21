import asyncHandler from "express-async-handler";
import Project from "../models/projectModel.js";
const projectPost = asyncHandler(async (req, res) => {
  const { name, type, status,pic } = req.body;

  const projectData = await Project.create({
    name,
    type,
    status,
    pic
  });

  if (projectData) {
    res.status(201).json({
      _id: projectData._id,
      name: projectData.name,
      type: projectData.type,
      status: projectData.status,
      pic: projectData.pic
    });
  } else {
    res.status(400);
    throw new Error("project not Saved");
  }
});

const getAllProject = asyncHandler(async (req, res) => {
  const projectData = await Project.find();
  res.json(projectData);
});

export {projectPost,getAllProject};