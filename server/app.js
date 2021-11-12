require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.static("../client/dist"));

const db = require("./config/db.config");
const sanitizer = require("sanitizer");

app.get("/api/products", async (req, res) => {
  await db
    .query(`SELECT * FROM products LIMIT 10`)
    .then((data) => res.send(data.rows))
    .catch((err) => console.log(err));
});

app.get("/api/id/:product_id", async (req, res) => {
  const id = req.params.product_id;
  await db
    .query(`SELECT * FROM products WHERE id = $1`, [id])
    .then((data) => res.send(data.rows[0]))
    .catch((err) => console.log(err));
});

app.get("/api/name/:name", async (req, res) => {
  const name = req.params.name.toLowerCase();
  const nameSanitized = sanitizer.escape(name);

  await db
    .query(`SELECT id, name FROM products WHERE name LIKE '%${nameSanitized}%'`)
    .then((data) => res.send(data.rows))
    .catch((err) => console.log(err));
});

app.listen(process.env.PORT, () => {
  console.log(`-- Listening on port ${process.env.PORT} --`);
});
