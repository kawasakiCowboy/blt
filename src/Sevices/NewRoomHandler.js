import {User} from "../Game/User.ts";
import {RoomManager} from "../Game/RoomManager.js";

export class NewRoomHandler {
    roomManager;
    /**
     * @param {RoomManager} roomManager
     */
    constructor(roomManager) {
        this.roomManager = roomManager;
    }

    /**
     *
     * @param {User} user
     */
    create(user) {
        // проверить что чел не состоит в другой комнате.
        if (user.room !== undefined) {
            throw new Error("user is already in room " + user.room.uuid);
        }
        // если нет - создать команту
        let room = this.roomManager.createRoom(user);
        // поместить чела в нее.
        user.room = room;
    }
}