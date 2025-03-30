import {User} from "../Game/User.js";

export class UserRepository {
    /**
     * @type {Map<number, User>}
     */
    list;

    constructor(list) {
        this.list = list;
    }

    /**
     * @param {Number} id
     * @returns {User}
     */
    findOrFail(id) {
        let user = this.list.get(id);
        if (user === undefined) {
            throw new Error(`user ${id} is not found`)
        }

        return user
    }

    /**
     * @param {User} user
     */
    createUser(user) {
        this.list.set(user.id, user)
    }
}