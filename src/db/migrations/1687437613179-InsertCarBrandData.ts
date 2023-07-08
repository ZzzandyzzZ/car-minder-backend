import { CarBrandEntity } from "@car/related/car-brand/infraestructure/db";
import { CarModelEntity } from "@car/related/car-model/infraestructure/db";
import * as fs from "fs";

import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCarBrandData1687437613179 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const fileData = fs.readFileSync("src/seeds/car_brands_2023_06_10.csv", "utf-8");
    const rows = fileData
      .trim()
      .split("\n")
      .map((row) => row.trim());
    for (let i = 1; i < rows.length; i++) {
      const columns = rows[i].split(",");
      const brandName = columns[0].toLowerCase();
      const modelName = columns[1].toLowerCase();
      let brand = await queryRunner.manager.findOne(CarBrandEntity, { where: { name: brandName } });
      let model = await queryRunner.manager.findOne(CarModelEntity, { where: { name: modelName } });
      if (brand && model) continue;
      if (!brand) {
        console.log(`Inserting brandName: ${brandName}`);
        brand = new CarBrandEntity();
        brand.name = brandName;
      }
      if (!model) {
        console.log(`Inserting modelName: ${modelName}`);
        model = new CarModelEntity();
        model.name = modelName;
      }
      model.brand = brand;
      await queryRunner.manager.save(model);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(CarBrandEntity, {});
    await queryRunner.manager.delete(CarModelEntity, {});
  }
}
