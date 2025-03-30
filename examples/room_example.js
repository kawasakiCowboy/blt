import {RoomManager} from './Game/RoomManager.js'
import {Room} from "./Game/Room.js";

let list = new RoomManager();
list.addRoom('123', new Room('123'))

console.log(list.getAll())