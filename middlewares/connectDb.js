const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const db = mongoose.connection;

const { DB_CONNECTION_STRING } = process.env;

mongoose.connect(DB_CONNECTION_STRING);

mongoose.connection.on("connected", () => console.log("Connected to DB!"));
mongoose.connection.on("error", (error) =>
  console.log("Failed to connect DB" + error)
);

module.exports = db;
