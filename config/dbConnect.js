import mongoose from "mongoose";

const dbConnect = () => {
  return mongoose.connect(process.env.NEXTAUTH_URI);
};

export default dbConnect;
