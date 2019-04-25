const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("HELLO WORLD!");
});

const port = 1337;
app.listen(port, () => {
  console.log(`APP LISTENING ON ${port}`);
});
