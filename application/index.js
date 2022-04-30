import express from "express";
import connectDb from "./middlewares/connectDb.js";
import routes from "./routes/routes.js";

connectDb;

const app = express();
app.use(express.json());
routes(app);
app.listen(3000, () => {
  console.log("Server on");
});

export default app;
