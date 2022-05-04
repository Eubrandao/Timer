const express = require("express");
const signupRoute = require("./SignupRoute.js");
const signinRoute = require("./SigninRoute.js");

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(404).send({ msg: "Ops, caminho errado!" });
  });

  app.use(express.json(), signupRoute, signinRoute);
};

module.exports = routes;
