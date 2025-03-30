
/**
 * @property {Map<String, Room>} list
 */
export class RoomList {
    constructor() {
        this.list = new Map
    }

    /**
     * @param {String} uuid
     * @param {Room} room
     */
    addRoom(uuid, room) {
        this.list.set(uuid, room)
    }

    getAll() {
        return this.list
    }
}
