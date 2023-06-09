import { UserRepository } from "../domain/user.repository";

class UserService {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  getUsers() {
    const users = this.userRepository.getAll();
    return users;
  }
}

export default UserService;
