//*Need to start the local MongoDB server first, then start the express server, otherwise the express server will start before the MongoDB connection is established, 
// and the server will not be able to find the collection in the database.
// Run this server by command: node index.js

// Create const express
import express from 'express';

// Create const app
const app = express();

// *Import cors to allow cross origin requests, because we are running on localhost:3000 and our vue app is running on localhost:5173
import cors from 'cors';
app.use(cors());

// Import mongodb-setting.js
import db from './MongoDB/Mongodb-setting/mongodb-setting.js';

// Connect to mongoDB
db(() => {

    console.log('Connection succeeded');
}, () => {
    console.log('Connection failed');
});

// Start express server, listen to port 3000
app.listen(3000, () => {
    console.log('server started on port 3000!!!');
});