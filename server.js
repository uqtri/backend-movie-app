import express from "express";
import bodyParser from "body-parser";
import { database } from "./database/index.js";
import { userRouter, authenRouter } from "./routes/index.js";
import cors from "cors";
const app = express();
const PORT = 3002;
app.use(bodyParser.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/authen", authenRouter);
app.listen(PORT, async () => {
  await database.connectToDB();
  console.log(`server is running on port ${PORT}`);
});
