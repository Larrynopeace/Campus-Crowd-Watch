// Encapsulate the setting of mongodb:

// 1. connect to mongoose
// 2. import mongoose
import mongoose from 'mongoose';

// success is the callback function when connect successfully
// err is the callback function when connect failed
export default function (success, err) {


    // 3. connect to mongoDB (27017 is the default port for MongoDB, *** is the name of the database, you can change it to your own database name)
    // *You will need to create a file as the path of the database files in your disk
    //mongoose.connect('mongodb://localhost:27017/***');
    mongoose.connect('mongodb://127.0.0.1:27017/***');

    // 4. set the connection
    // 4.1. connect successfully
    mongoose.connection.on('connected', function () {
        success(); //hand it to the callback function in server/index.js
    });


    // 4.2. connect failed
    mongoose.connection.on('error', function () {
        //console.log(err);
        err(); //hand it to the callback function in server/index.js
    });

    // 4.3. disconnect
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose connection disconnected');
    });

}