require("dotenv").config();
const express = require("express");
const app = express();
require("./DB/DBConnetions");
const cors = require("cors");
const UserRouter = require("./Router/routes");
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(UserRouter);

app.listen(port, () => {
  console.log(`server is start ${port}`);
});
