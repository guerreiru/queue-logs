import "dotenv/config";
import express from "express";
import { sync } from "./app/controllers/syncController";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/sync", sync);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
