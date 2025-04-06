import {UserRepository} from "../src/Repository/UserRepository";
import {User} from "../src/Game/User";


let newUserRepository = new UserRepository(new Map);
let newUser = new User(1,"hayk");
newUserRepository.createUser(newUser);
let foundUser = newUserRepository.findOrFail(1);
console.log(foundUser.name);