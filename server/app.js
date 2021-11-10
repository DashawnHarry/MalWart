require("dotenv").config();

const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("../client/dist"));

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(process.env.PORT, () => {
  console.log(`-- Listening on port ${process.env.PORT} --`);
});
