/* import mongoose from "mongoose";

const { Schema, model } = mongoose; */

import { Schema, model } from 'mongoose';

const yourSchemaNameSchema = new Schema({
  image_url: { type: String, required: true },
  Address: { type: String, required: true },
  Building_name: { type: String, required: true },
  Max_Occupancy: { type: Number, required: true },
});

// "BuildingModel" will be the name of the collection in the database
const BuildingModel = model("BuildingModel123", yourSchemaNameSchema);

export default BuildingModel;
