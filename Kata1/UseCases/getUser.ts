import { User } from "../Entities/user.entity";
import { UserRepository } from "../Repository/userRepository";

export class GetUserUseCase {
    constructor(
        private userRepository: UserRepository
    ) {

    }

    getUserList(): User[] {
            return this.userRepository.getUsers()
    }
}