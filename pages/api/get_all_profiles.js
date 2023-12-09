import User from "../../models/user";
import Admin from "../../models/admin";
import dbConnect from "../../config/dbConnect";

export default async function GetAllProfles(req, res) {
  if (req.method === "GET") {
    dbConnect();
    let DataBase = await User.find({}).lean();

    DataBase = DataBase.map((user) => {
      return {
        ...user,
        created_at: [
          new Date(user.created_at).toDateString(),
          new Date(user.created_at).toLocaleTimeString(),
        ],
      };
    });

    return await res.status(201).json(DataBase);
  }

  return await res.status(500).json({ msg: "We dont have any profiles yet " });
}
