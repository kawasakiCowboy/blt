import {User} from "./User.js";

export class UserManager {
    /**
     * @type {Map<Number, User>}
     */
    list;

    constructor() {
        this.list = new Map;
    }
}