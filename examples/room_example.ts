import {RoomManager} from '../src/Game/RoomManager';
import {Room} from "../src/Game/Room";
import {User} from "../src/Game/User";

let list = new RoomManager();
let user = new User(1, "hayk");
list.createRoom(user);

console.log(list.getAll())