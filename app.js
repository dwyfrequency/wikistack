const express = require("express");
const morgan = require("morgan");
const app = express();
const views = require("./views/main");
const { db } = require("./models");
app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(views());
});

db.authenticate().then(() => {
  console.log("CONNECTED TO DB");
});

const port = 1337;
app.listen(port, () => {
  console.log(`APP LISTENING ON ${port}`);
});
