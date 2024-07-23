import mongoose from "mongoose";

const facultydataSchema = mongoose.Schema({
  imagename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  room: {
    type: Number,
    required: true,
  },
  department: {
    type: String, // Assuming department is a string (e.g., "IT", "CE")
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email addresses are unique
  },
  mobile: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Roles: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: false,
  },
  allow: {
    type: Boolean,
    default: false,
  },
});

// Ensure the model is created only once
const uploadFModel = mongoose.models.FacultyData || mongoose.model("FacultyData", facultydataSchema);

export default uploadFModel;
