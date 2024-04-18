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

export default router;
