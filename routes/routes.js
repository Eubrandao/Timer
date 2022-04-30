import express from "express";
import signupRoute from "./signupRoute.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(404).send({ msg: "Ops, caminho errado!" });
  });

  app.use(express.json(), signupRoute);
};

export default routes;
