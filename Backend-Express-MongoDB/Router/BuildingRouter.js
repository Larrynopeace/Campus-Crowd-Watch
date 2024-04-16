import { Router } from "express";
import getBuildings from "../MongoDB/Routes/Building/BuildingRoute.js";

const router = Router();

router.use(getBuildings);

export default router;
