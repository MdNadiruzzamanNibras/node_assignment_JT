const mongoose = require("mongoose");

const DB = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.9ok7fga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(DB, {
    useUnifiedTopology: true,

    useNewUrlParser: true,
  })
  .then(() => console.log("Connect"))
  .catch((error) => {
    console.log("not connected");
  });
