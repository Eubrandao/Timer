const express = require("express");
const connectDb = require("./middlewares/connectDb.js");
const routes = require("./routes/routes.js");

connectDb;

const app = express();
app.use(express.json());
routes(app);

app.listen(8080, () => {
  console.log("Server on");
});

module.exports = app;
