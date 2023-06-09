import { MigrationInterface, QueryRunner } from "typeorm";
import { faker } from "@faker-js/faker";

import { UserEntity } from "@user/infraestructure";

export class InsertRandomUsers1623238772060 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const users: UserEntity[] = [];
    for (let i = 0; i < 10; i++) {
      const user = new UserEntity();
      user.createdAt = new Date();
      user.dni = faker.number.int({ min: 10000000, max: 99999999 }).toString();
      user.email = faker.internet.email();
      user.firstname = faker.person.firstName();
      user.lastname = faker.person.lastName();
      user.middlename = faker.person.firstName();
      user.phone = faker.phone.number();
      user.secondLastname = faker.person.lastName();
      user.token = faker.string.uuid();

      const existingUser = await queryRunner.manager.findOne(UserEntity, { where: { dni: user.dni } });

      if (!existingUser) {
        users.push(user);
      }
    }
    if (users.length > 0) {
      await queryRunner.manager.save(users);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(UserEntity, {});
  }
}
