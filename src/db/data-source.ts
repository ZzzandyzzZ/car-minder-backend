// import { join } from "path";

import { DataSource } from "typeorm";

import { DATABASE_URL, NODE_ENV } from "../env-vars";
import { CarBrandEntity, CarColorEntity, CarEntity, CarModelEntity } from "@car/infraestructure/db";
import { SnakeNamingStrategy } from "./snake-naming-strategy";
import { InsertCarBrandData1687437613179 } from "./migrations/1687437613179-InsertCarBrandData";

export const AppDataSource = new DataSource({
  url: DATABASE_URL,
  type: "postgres",
  logging: false,
  entities: [CarEntity, CarBrandEntity, CarColorEntity, CarModelEntity],
  // entities: [join(__dirname, "../**", "*-entity.{ts,js}")],
  synchronize: NODE_ENV !== "PRD",
  migrations: [InsertCarBrandData1687437613179],
  // migrations: [join(__dirname, "migrations", "*.{ts,js}")],
  // migrationsRun: true,
  // dropSchema: true,
  namingStrategy: new SnakeNamingStrategy(),
});
