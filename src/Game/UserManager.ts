import {User} from "./User.ts";

export class UserManager {
    /**
     * @type {Map<Number, User>}
     */
    list;

    constructor() {
        this.list = new Map;
    }
}