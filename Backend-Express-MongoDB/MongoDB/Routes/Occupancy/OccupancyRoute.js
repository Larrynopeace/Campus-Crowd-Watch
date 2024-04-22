// This is the routes file for the Occupancy collection in the MongoDB database.

import { Router } from "express";

import OccupancyModel from "../../Models/OccupancyModel.js";

const router = Router();

// Get all occupancy data
router.get("/api/occupancy", async (_, res) => {
  try {
    // .populate("building_id") is used to populate the referenced collection
    const occupancyData = await OccupancyModel.find({}).populate("building_id");
    res.send(occupancyData);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Get the occupancy data for a specific building by building name
router.get("/api/occupancy/name/:buildingName", async (req, res) => {
  try {
    const occupancyData = await OccupancyModel.find({
      building: req.params.buildingName,
    }).populate("building_id");
    res.send(occupancyData);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Get the occupancy data for a specific building by building id
router.get("/api/occupancy/:building", async (req, res) => {
  try {
    const user = await OccupancyModel.find({
      building_id: req.params.building,
    }).populate("building_id");
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.send(user);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/api/occupancy", async (req, res) => {
  try {
    const newOccupancy = new OccupancyModel(req.body);
    const savedOccupancy = await newOccupancy.save();
    res.status(201).send(savedOccupancy);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Internal Server Error");
  }
});
export default router;
