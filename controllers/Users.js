import User from "../models/UserModel.js";

const getUserByName = async (name) => {
  return await User.findOne({
    where: {
      name,
    },
  });
};

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ["uuid", "name"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      attributes: ["uuid", "name"],
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createUser = async (req, res) => {
  const { name } = req.body;
  try {
    await User.create({
      name: name,
    });
    res.status(201).json({ msg: "successful registration" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
