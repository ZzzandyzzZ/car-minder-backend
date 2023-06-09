import express from "express";

// import { Client } from "pg";

import { DATABASE_URL, PORT } from "./env_vars";
import apiRouter from "./modules/shared/api.router";

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.get("/", (_req, res) => {
  console.log(DATABASE_URL);
  res.send("Hello, world!");
});

// const connectionString = DATABASE_URL;

// const client = new Client({
//   connectionString,
// });

// client.connect();
// client.query("SELECT * FROM users", (err, res) => {
//   console.log("error", err);
//   console.log("rpta", res.rows);
//   client.end();
// });
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
