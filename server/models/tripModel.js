import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});

const Trip = mongoose.model("Trip", tripSchema);
export default Trip;
