import { Router } from "express";
import getBuildings from "./routes/BuildingRoute.js";
const router = Router();
router.use(getBuildings);
export default router;
