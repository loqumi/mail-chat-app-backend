import express from "express";
import { getMails, sendMail, setIsRead } from "../controllers/Mails.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/mails", verifyUser, getMails);
router.post("/send", verifyUser, sendMail);
router.post("/isred", verifyUser, setIsRead);

export default router;
