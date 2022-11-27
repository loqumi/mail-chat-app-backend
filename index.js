import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import MailRoute from "./routes/MailRouter.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

(async () => {
  await db.sync();
})();

const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));
app.use(cookieParser());
app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);
app.use(MailRoute);

app.listen(process.env.PORT, () => {
  console.log("Server up and running...");
});
