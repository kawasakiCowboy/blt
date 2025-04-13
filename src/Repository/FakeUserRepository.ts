import { User } from "../Game/User";
import {UserRepositoryInterface} from "./UserRepositoryInterface";

export class FakeUserRepository implements UserRepositoryInterface {
    findOrFail(id: number): User {
        return new User(id,"fakeUser")
    }
    addUser(user: User): void {

    }
}