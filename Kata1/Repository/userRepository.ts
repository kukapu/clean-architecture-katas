import { User } from "../Entities/user.entity";
import { usersList } from "../mocks/userList";

export class UserRepository {

    users: User[] = [];

    constructor() {
        this.users = usersList;
    }

    create(user: User): void {
        try {
            this.users.push(user);
            console.log("usuario creado");
        } catch (e: any) {
            throw new Error(e);
        }
    }

    getUsers(): User[] {
        return this.users;
    }
}