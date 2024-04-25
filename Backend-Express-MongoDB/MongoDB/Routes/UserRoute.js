import { Router } from "express";
import UserModel from "../Models/UsersModel.js";

const router = Router();

router.get("/api/users", async (req, res) => {
  try {
    const users = await UserModel.find({}).populate("favorite_buildings");
    res.send(users);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/api/users/:username", async (req, res) => {
  try {
    const user = await UserModel.findOne({
      username: req.params.username,
    }).populate("favorite_buildings");
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.send(user);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Internal Server Error");
  }
});
router.post("/api/users", async (req, res) => {
  console.log("test");
  try {
    console.log(req.body);
    const newUser = await UserModel.create(req.body);
    res.status(201).send(newUser);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Internal Server Error");
  }
});
// PUT route to update a user's favorite buildings
router.put("/api/users/:username/favorite_buildings", async (req, res) => {
  try {
    // Retrieve the username from the request parameters
    const { username } = req.params;

    // Retrieve the updated favorite buildings from the request body
    const { favorite_buildings } = req.body;

    // Find the user by username
    const user = await UserModel.findOne({ username });

    // If user not found, return 404
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Update the user's favorite buildings
    user.favorite_buildings = favorite_buildings;

    // Save the updated user object to the database
    await user.save();

    // Respond with the updated user object
    res.send(user);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
