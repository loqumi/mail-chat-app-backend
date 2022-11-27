import { Sequelize } from "sequelize";

const db = new Sequelize("freedb_chat_db", "freedb_chater", "56vN4hN%wVGdfv5", {
  host: "sql.freedb.tech",
  dialect: "mysql",
});

export default db;
