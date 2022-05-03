const express = require("express");
const Signin = require("../apps/signin.js");

const router = express.Router();

router.post("/auth", Signin.signin);
module.exports = router;
