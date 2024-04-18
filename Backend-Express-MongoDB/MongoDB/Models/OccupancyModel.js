// This file is the model for the Occupancy collection in the MongoDB database.

import { Schema, model, Types } from "mongoose";

const OccupancySchema = new Schema({
    time: {
        type: String,
        required: true,
    },
    building: {
        type: String,
        required: true,
    },
    occupancy: {
        type: Number,
        required: true,
    },
    /* building_id: {
        type: Number,
        required: true,
    }, */

    // If you want to reference another collection, you can use the following code
    // *In route, you can populate the referenced collection using the following code:.populate('building_id')
    building_id: {
        type: Types.ObjectId,
        ref: 'building_live_occupancies',
        required: true,
    }, 
});

const OccupancyModel = model("time_occupancies", OccupancySchema);

export default OccupancyModel;
