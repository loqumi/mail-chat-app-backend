import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "Users",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNullL: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNullL: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default User;
