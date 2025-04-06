import {Room} from "./Room";

export class User {

    id: number;
    name: string;
    room: Room | null = null;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}