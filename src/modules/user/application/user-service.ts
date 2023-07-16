export class UserService {
  private userRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUsers() {
    const users = await this.userRepository.getAll();
    return users.map((userEntity) => {
      const { personalInfo, dni } = userEntity;
      return { personalInfo, dni };
    });
  }
}
