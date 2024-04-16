import mongoose from "mongoose";
const { Schema, model } = mongoose;

const yourSchemaNameSchema = new Schema({
  image_url: { type: String, required: true },
  Address: { type: String, required: true },
  Building_name: { type: String, required: true },
  Max_Occupancy: { type: Number, required: true },
});

const BuildingModel = mongoose.model("BuildingModel", yourSchemaNameSchema);

export default BuildingModel;
