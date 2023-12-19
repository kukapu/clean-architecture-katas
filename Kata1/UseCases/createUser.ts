import { User } from "../Entities/user.entity";
import { UserRepository } from "../Repository/userRepository";

export class CreateUserUseCase {
    constructor(
        private userRepository: UserRepository
    ) {
        
    }

    create(user: User ) : void {
        try {
            if (user.isValid()) {
                this.userRepository.create(user)
            }
        } catch (error: any) {
            throw new Error(error);
        }
    }
}