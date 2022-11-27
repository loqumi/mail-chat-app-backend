import User from "../models/UserModel.js";

const createUser = async (name) => {
  return await User.create({
    name: name,
  });
};

export const Login = async (req, res) => {
  const name = req.body.name
  let user = await User.findOne({
    where: {
      name: name,
    },
  });
  if (!user) {
    user = createUser(name);
  }
  res
    .cookie("token", name, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json({ name });
};

export const Me = async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ msg: "Please login to your account!" });
  }
  const user = await User.findOne({
    attributes: ["uuid", "name"],
    where: {
      name: token,
    },
  });
  if (!user) return res.status(404).json({ msg: "user not found" });
  res.status(200).json(user);
};

export const logOut = (req, res) => {
  return res
    .clearCookie("token")
    .status(200)
    .json({ msg: "You have logged out" });
};

