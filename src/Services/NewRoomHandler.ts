import {User} from "../Game/User";
import {RoomManager} from "../Game/RoomManager";

export class NewRoomHandler {
    roomManager: RoomManager;

    constructor(roomManager: RoomManager) {
        this.roomManager = roomManager;
    }

    create(user: User) {
        // проверить что чел не состоит в другой комнате.
        if (user.room !== null) {
            throw new Error("user is already in room " + user.room.uuid);
        }
        // если нет - создать команту
        // поместить чела в нее.
        user.room = this.roomManager.createRoom(user);
    }
}