require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.static("../client/dist"));

const db = require("./config/db.config");

app.get("/api/products", (req, res) => {
  await db
    .query(
      `
  SELECT * FROM products LIMIT 10`
    )
    .then((data) => res.send(data.rows))
    .catch((err) => console.log(err));
});

app.get("/api/search/:product_id", (req, res) => {
  const id = req.params.product_id;
  await db
    .query(`SELECT * FROM producst WHERE id = $1`, id)
    .then((data) => res.send(data.rows[0]))
    .catch((err) => console.log(err));
});

app.get("/api/search/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  await db
    .query(`SELECT id, name FROM products WHERE name LIKE %$1%`, name)
    .then((data) => res.send(data.rows))
    .catch((err) => console.log(err));
});

app.listen(process.env.PORT, () => {
  console.log(`-- Listening on port ${process.env.PORT} --`);
});
