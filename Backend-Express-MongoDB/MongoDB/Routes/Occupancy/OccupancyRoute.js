// This is the routes file for the Occupancy collection in the MongoDB database.

import { Router } from "express";

import OccupancyModel from "../../Models/OccupancyModel.js";

const router = Router();

// Get all occupancy data
router.get("/api/occupancy", async (_, res) => {
    try {
        const occupancyData = await OccupancyModel.find({}).populate('building_id');
        res.send(occupancyData);
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("Internal Server Error");
    }
});

export default router;