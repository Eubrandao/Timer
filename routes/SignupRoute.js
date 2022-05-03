const express = require("express");
const Signup = require("../apps/signup");

const router = express
  .Router()
  .get("/users", Signup.listUsers)
  .get("/users/:id", Signup.listUser)
  .post("/users", Signup.newUser)
  .put("/users/:id", Signup.userUpdate)
  .delete("/users/:id", Signup.userDelete);

module.exports = router;
