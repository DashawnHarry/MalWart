require("dotenv").config();

const express = require("express");
const app = express();

// Serve static files.
app.use(express.static("../client/dist"));

// Database set up.
const db = require("./config/db.config");
const sanitizer = require("sanitizer");

// Route to return all full product results from the database.
app.get("/api/products", async (req, res) => {
  await db
    .query(`SELECT * FROM products`)
    .then((data) => res.send(data.rows))
    .catch((err) => console.log(err));
});

// Route to return one full product result based on the id.
app.get("/api/id/:product_id", async (req, res) => {
  const id = req.params.product_id;
  await db
    .query(`SELECT * FROM products WHERE id = $1`, [id])
    .then((data) => res.send(data.rows[0]))
    .catch((err) => console.log(err));
});

// Route to search the product names and compare with search input.
app.get("/api/name/:name", async (req, res) => {
  const name = req.params.name.toLowerCase();
  const nameSanitized = sanitizer.escape(name);

  await db
    .query(
      `SELECT id, title FROM products WHERE name LIKE '%${nameSanitized}%'`
    )
    .then((data) => res.send(data.rows))
    .catch((err) => console.log(err));
});

app.listen(process.env.PORT, () => {
  console.log(`-- Listening on port ${process.env.PORT} --`);
});
