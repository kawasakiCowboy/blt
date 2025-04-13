import {User} from "../Game/User";

export interface UserRepositoryInterface {
    findOrFail(id: number): User;
    addUser(user: User): void;
}