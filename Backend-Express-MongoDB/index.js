//*Need to start the local MongoDB server first, then start the express server, otherwise the express server will start before the MongoDB connection is established,
// and the server will not be able to find the collection in the database.
// Run this server by command: node index.js

// Create const express
import express from "express";

const app = express();

// *Import cors to allow cross origin requests, because we are running on localhost:3000 and our vue app is running on localhost:5173
import cors from "cors";
app.use(cors());


// Import mongodb-setting.js
import db from "./MongoDB/Mongodb-setting/mongodb-setting.js";
import buildingRouter from "./Router/BuildingRouter.js";
import occupancyRouter from "./Router/OccupancyRouter.js";
import sendEmail from "./MongoDB/Routes/send-emails.js";

// Connect to mongoDB
db(
  () => {

    // Mounting the routers
    app.use(express.json());
    app.use(buildingRouter);
    app.use(occupancyRouter);
    app.use(sendEmail);

    //To serve these local images, you can use the express.static middleware in your Express.js server: http://localhost:3000/images/xxxx.jpeg
    app.use('/images', express.static('images'));
    
    console.log("Connection succeeded");
  },
  () => {
    console.log("Connection failed");
  }
);

// Start express server, listen to port 3000
app.listen(3000, () => {
  console.log("server started on port 3000!!!");
});
