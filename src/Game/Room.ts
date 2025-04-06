import {User} from "./User";

export class Room {
    uuid: string;
    userList: User[] = [];
    constructor(uuid: string, userList: User[] = []) {
        this.userList = userList;
        this.uuid = uuid;
    }
}
