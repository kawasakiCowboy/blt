import {UserRepository} from "../Repository/UserRepository.ts";

export class AddPlayerToRoomHandler {
    constructor(repository) {
        this.repository = repository;
    }

    add() {
        this.repository.findOrFail(1);
    }
}