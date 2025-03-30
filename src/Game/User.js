export class User {
    /** @type {Number} */
    id;
    /** @type {String} */
    name;
    /** @type {Room|undefined} */
    room= undefined;

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}