import crypto from 'crypto';
import {Room} from "./Room.js";
import {User} from "./User.js";

/**
 * @property {Map<String, Room>} list
 */
export class RoomManager {
    constructor() {
        this.list = new Map
    }

    /**
     * @param {User} user
     * @returns {Room}
     */
    createRoom(user) {
        const uuid = crypto.randomUUID();
        let room = new Room(uuid, [user]);

        this.list.set(uuid, room)

        return room;
    }

    getAll() {
        return this.list
    }
}
