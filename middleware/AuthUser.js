import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ msg: "Please login to your account!" });
  }
  const user = await User.findOne({
    where: {
      name: token,
    },
  });
  if (!user) return res.status(404).json({ msg: "user not found" });
  req.userId = user.id;
  next();
};
