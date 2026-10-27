import express from "express";
import pg from "pg"; // database integration if we need it

const app = express();
const port = 5000;

app.get("/api", (req, res) => {
  res.json({ message: "From server" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});