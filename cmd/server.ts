import express from "express";
import {NewRoomHandler} from "../src/Services/NewRoomHandler";
import {UserRepository} from "../src/Repository/UserRepository";
import {RoomManager} from "../src/Game/RoomManager";
import {User} from "../src/Game/User";

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
        if (error instanceof  Error) {
            res.status(500)
            res.send(error.message)
        } else {
            console.error('Неизвестная ошибка', error);
        }
    }
})

server.listen(4777)