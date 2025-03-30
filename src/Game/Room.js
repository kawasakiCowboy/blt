import {User} from "./User.js";

export class Room {
    /**
     * @type {User[]}
     */
    userList = [];
    /**
     * @param {String} uuid
     * @param {User[]} userList
     */
    constructor(uuid, userList = []) {
        this.userList = userList;
        this.uuid = uuid
    }
}
