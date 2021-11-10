require("dotenv").config();
// const path = require("path");

const express = require("express");
const app = express();

app.use(express.static("../client/dist"));

const db = require("./config/db.config");

app.get("/test", async (req, res) => {
  await db
    .query(
      `
  SELECT * FROM products`
    )
    .then((data) => res.send(data.rows))
    .catch((err) => console.log(err));
});

app.get("/api/products", (req, res) => {});

app.post("/api/search", (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log(`-- Listening on port ${process.env.PORT} --`);
});
