require("dotenv").config();

const express = require("express");
const app = express();

// Comment
app.use(express.static("../client/dist"));

app.listen(process.env.PORT, () => {
  console.log(`-- Listening on port ${process.env.PORT} --`);
});
