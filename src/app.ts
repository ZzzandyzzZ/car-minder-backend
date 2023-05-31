import express from "express";
import { Client } from "pg";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
const connectionString = process.env.DATABASE_URL;
const client = new Client({
  connectionString,
});

client.connect();
client.query("SELECT * FROM users", (err, res) => {
  console.log("error", err);
  console.log("rpta", res.rows);
  client.end();
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
