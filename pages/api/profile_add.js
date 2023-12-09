import User from "../../models/user";
import dbConnect from "../../config/dbConnect";

export default async function ProfileAdd(req, res) {
  if (req.method === "POST") {
    dbConnect();

    const HandleCheck = await User.findOne({
      user_handle: req.body.user_handle,
      email: req.body.email,
    });

    if (HandleCheck === null) {
      const Database = await User.create(req.body);
      return res.status(201).json(Database);
    }

    return res.status(201).json({ msg: "Please Try Unique Handle or Email " });
  }
  return res.status(500).json({ msg: "We can't post any profiles yet " });
}
