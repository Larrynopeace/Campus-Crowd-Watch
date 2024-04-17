import { Router } from "express";
import getBuildings from "../MongoDB/Routes/Building/BuildingRoute.js";
import getUsers from "../MongoDB/Routes/UserRoute.js";
const router = Router();

router.use(getBuildings);
router.use(getUsers);
export default router;
