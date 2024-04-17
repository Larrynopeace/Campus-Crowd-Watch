import { Router } from "express";

import BuildingModel from "../../Models/BuildingModel.js";

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

// Get a single building by ID
// router.get("/api/buildings/:id", async (req, res) => {
//     try {
//         const building = await BuildingModel.findById(req.params.id);
//         if (!building) {
//             return res.status(404).send("Building not found");
//         }
//         res.send(building);
//     } catch (err) {
//         console.error("Error occurred:", err);
//         res.status(500).send("Internal Server Error");
//     }
// });

// Get a single building by ID
router.get("/api/buildings/:building_id", async (req, res) => {
    try {
        const building = await BuildingModel.findOne({ building_id: req.params.building_id });
        if (!building) {
            return res.status(404).send("Building not found");
        }
        res.send(building);
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Update a building by ID
router.put("/api/buildings/:building_id", async (req, res) => {
    try {
        const { building_id } = req.params;
        const update = req.body; // Assuming the request body contains the updated information

        const updatedBuilding = await BuildingModel.findByIdAndUpdate(building_id, update, { new: true });
        // { new: true } option returns the updated document

        if (!updatedBuilding) {
            return res.status(404).send("Building not found");
        }

        res.send(updatedBuilding);
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Create a new building
router.post("/api/buildings", async (req, res) => {
    try {
        const buildingData = req.body; // Assuming the request body contains the building information

        const newBuilding = await BuildingModel.create(buildingData);

        res.status(201).send(newBuilding); // 201 status code indicates successful creation
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("Internal Server Error");
    }
});
// Delete a building by ID
router.delete("/api/buildings/:building_id", async (req, res) => {
    try {
        const { building_id } = req.params;

        const deletedBuilding = await BuildingModel.findOneAndDelete({ building_id: building_id.building_id });


        if (!deletedBuilding) {
            return res.status(404).send("Building not found");
        }

        res.send("Building deleted successfully");
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("Internal Server Error");
    }
});


export default router;
