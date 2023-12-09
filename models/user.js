import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  user_image: String,
  user_handle: String,
  user_name: String,
  dob: String,
  address: String,
  city: String,
  pincode: String,
  email: String,
  contact: String,
  password: String,
  experince_year: String,
  faculty: String,
  gender: Object,
  hobbies: Object,
  education: Array,
  experince: Array,
  awards: Array,
  skills: Array,
  workshops: Array,
  testimonials: Array,
  created_at: Date,
  profile_status: String,
});

export default mongoose.models.User ||
  mongoose.model("User", userSchema, "users");
