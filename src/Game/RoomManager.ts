import { v4 as uuidv4 } from 'uuid';
import {Room} from "./Room";
import {User} from "./User";


export class RoomManager {
    list: Map<string, Room>
    constructor() {
        this.list = new Map
    }


    createRoom(user: User): Room {
        const uuid = uuidv4();
        let room = new Room(uuid, [user]);

        this.list.set(uuid, room);

        return room;
    }

    getAll() {
        return this.list
    }
}
