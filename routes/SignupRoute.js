import express from "express";
import Signup from "../src/signup.js";

const router = express
  .Router()
  .get("/users", Signup.listUsers)
  .get("/users/:id", Signup.listUser)
  .post("/users", Signup.newUser)
  .put("/users/:id", Signup.userUpdate)
  .delete("/users/:id", Signup.userDelete);

export default router;
