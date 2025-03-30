import express from "express";
import {NewRoomHandler} from "../src/Sevices/NewRoomHandler.js";
import {UserRepository} from "../src/Repository/UserRepository.js";
import {RoomManager} from "../src/Game/RoomManager.js";
import {User} from "../src/Game/User.js";

const server = express();

let userMap = new Map
let userRepo = new UserRepository(userMap)
userRepo.createUser(new User(123, "Hayk"))

let roomManager = new RoomManager();

server.use(express.urlencoded({ extended: true }));  // Парсит form-data

server.post("/new-room", (req, res) => {

    const { user_id } = req.body;  // Данные формы в req.body

    let user = userRepo.findOrFail(parseInt(user_id))

    let handler = new NewRoomHandler(roomManager);

    try {
        handler.create(user)

        res.send(roomManager.getAll())

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
})

server.listen(4777)