// This is the router of Occupancy collection in the MongoDB database.

import { Router } from "express";
import getOccupancy from "../MongoDB/Routes/Occupancy/OccupancyRoute.js";

const router = Router();

// Mounting the CRUD methods on the router
router.use(getOccupancy);

export default router;
