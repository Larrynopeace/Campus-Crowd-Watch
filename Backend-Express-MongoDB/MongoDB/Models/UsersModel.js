import mongoose from "mongoose";
const { Schema, model } = mongoose;

// const yourSchemaNameSchema = new Schema({
//   image_url: { type: String, required: true },
//   Address: { type: String, required: true },
//   Building_name: { type: String, required: true },
//   Max_Occupancy: { type: Number, required: true },
//   Current_Occupancy: { type: Number, required: true },
//   building_id: { type: String, required: true },
// });
const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
  is_staff: { type: Boolean, default: false },
  favorite_buildings: [{ type: Schema.Types.ObjectId, ref: 'building_live_occupancies'}],
  //favorite_buildings: [Number],
});

const UserModel = model("users", UserSchema);

export default UserModel;
