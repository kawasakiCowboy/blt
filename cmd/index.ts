import {UserRepository} from "../src/Repository/UserRepository";
import {User} from "../src/Game/User";
import {UserRepositoryInterface} from "../src/Repository/UserRepositoryInterface";
import {FakeUserRepository} from "../src/Repository/FakeUserRepository";
import {ModelLoader} from "../src/Game/ModelLoader";
import {Sequelize} from "sequelize";

const sequelize = new Sequelize('postgres://postgres:example@localhost:5432/postgres'); // Example for postgres

const modelLoader = new ModelLoader();
modelLoader.load(sequelize);


const newUserRepository = new UserRepository(new Map);
const fakeUserRepository = new FakeUserRepository();
const newUser = new User(1,"hayk");
newUserRepository.addUser(newUser);

function repositoryTest(repository: UserRepositoryInterface) {
    console.log(repository.findOrFail(1).name);
}

repositoryTest(fakeUserRepository);
repositoryTest(newUserRepository);