require("dotenv").config();

const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send("Working...?");
});

app.get("/api/products", (req, res) => {});

app.post("/api/search", (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log(`-- Listening on port ${process.env.PORT} --`);
});
