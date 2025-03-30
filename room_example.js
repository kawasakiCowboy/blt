import {RoomList} from './Game/RoomList.js'
import {Room} from "./Game/Room.js";

let list = new RoomList();
list.addRoom('123', new Room('123'))

console.log(list.getAll())