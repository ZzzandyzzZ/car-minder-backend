import { join } from "path";

import { DataSource } from "typeorm";

import { DATABASE_URL, NODE_ENV } from "../env-vars";

export const AppDataSource = new DataSource({
  url: DATABASE_URL,
  type: "postgres",
  logging: false,
  entities: [join(__dirname, "../**", "*-entity.{ts,js}")],
  synchronize: NODE_ENV !== "PRD",
  migrations: [join(__dirname, "migrations", "*.{ts,js}")],
  // dropSchema: true,
});
