// This is the routes file for the Occupancy collection in the MongoDB database.

import { Router } from "express";

import OccupancyModel from "../../Models/OccupancyModel.js";

const router = Router();

// Get all occupancy data
router.get("/api/occupancy", async (_, res) => {
  try {
    const occupancyData = await OccupancyModel.find({}).populate("building_id");
    res.send(occupancyData);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Internal Server Error");
  }
});

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
    const { building_id, occupancy, time, building } = req.body;
    const newOccupancy = new OccupancyModel({ building_id, occupancy, time, building });
    const savedOccupancy = await newOccupancy.save();
    res.status(201).send(savedOccupancy);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Internal Server Error");
  }
});
export default router;
