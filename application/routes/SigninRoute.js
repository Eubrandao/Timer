import express from "express";
import Signin from "../src/signin.js";

const router = express.Router();

router.post("/auth", Signin.signin);
export default router;
