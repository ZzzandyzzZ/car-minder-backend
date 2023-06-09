import { DataSource } from "typeorm";
import { DATABASE_URL, ENV } from "./env_vars";

export const AppDataSource = new DataSource({
  url: DATABASE_URL,
  type: "postgres",
  synchronize: true,
  logging: ENV !== "PRD",
  entities: [],
});
