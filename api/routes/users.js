import exress from "express";
import { getUser } from "../controllers/user.js";

const router = exress.Router()

router.get("/find/:userId", getUser)

export default router;