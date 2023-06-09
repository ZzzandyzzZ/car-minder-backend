import express from "express";

import apiRouter from "./api.router";

export const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.get("/", (_req, res) => {
  res.send("Hello, world!");
});
