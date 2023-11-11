import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login); //"/auth/" will be prefixed taking this route

export default router;