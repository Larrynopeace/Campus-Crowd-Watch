    import { Router } from "express";

    import BuildingModel from "./models/BuildingModel.js";

    const router = Router();

    router.get("/api/buildings", async (req, res) => {
    try {
        const buildings = await BuildingModel.find({});
        res.send(buildings);
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("Internal Server Error");
    }
    });

    export default router;
