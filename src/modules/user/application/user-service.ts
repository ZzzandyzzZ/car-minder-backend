import { UserShow } from "@user/domain";
import { UserRepository } from "../domain/user-repository";

export class UserService {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  async getUsers(): Promise<UserShow[]> {
    const users = await this.userRepository.getAll();
    return users.map((userEntity) => {
      const { id, firstname, dni }: UserShow = userEntity;
      return { id, firstname, dni };
    });
  }
}
