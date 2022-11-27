import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Mail = db.define(
  "Mails",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNullL: false,
    },
    to: {
      type: DataTypes.STRING,
      allowNullL: false,
    },
    from: {
      type: DataTypes.STRING,
      allowNullL: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNullL: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNullL: false,
    },
    isRead: {
      type: DataTypes.BOOLEAN,
      allowNullL: false,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Mail;
