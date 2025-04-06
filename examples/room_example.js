import {RoomManager} from './Game/RoomManager.js'
import {Room} from "./Game/Room.ts";

let list = new RoomManager();
list.addRoom('123', new Room('123'))

console.log(list.getAll())