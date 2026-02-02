const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());               // allows frontend to call backend
app.use(express.json());       // allows JSON request bodies

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is running"
  });
});

module.exports = app;
