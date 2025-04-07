import {UserRepository} from "../Repository/UserRepository";

export class AddPlayerToRoomHandler {
    repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    add() {
        this.repository.findOrFail(1);
    }
}