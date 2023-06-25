export class UserService {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  async getUsers(): Promise<UserShow[]> {
    const users = await this.userRepository.getAll();
    return users.map((userEntity) => {
      const { personalInfo, dni } = userEntity;
      return { personalInfo, dni };
    });
  }
}
