// Schema
import User from "../../models/user";

// database
import dbConnect from "../../config/dbConnect";

export default async function ProfileUpdate(req, res) {
  if (req.method === "POST") {
    dbConnect();
    const data = await User.findOneAndUpdate(
      { user_handle: req.body.user_handle },
      {
        profile_status: req.body.profile_status,
      }
    );
    return res.status(201).json(data);
  }
  return res.status(500).json({ msg: "Server Error" });
}
