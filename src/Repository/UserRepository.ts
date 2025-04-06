import {User} from "../Game/User";

export class UserRepository {
    list: Map<number,User>;

    constructor(list: Map<number,User>) {
        this.list = list;
    }

    findOrFail(id: number) {
        let user = this.list.get(id);
        if (user === undefined) {
            throw new Error(`user ${id} is not found`)
        }

        return user
    }

    createUser(user: User) {
        this.list.set(user.id, user)
    }
}