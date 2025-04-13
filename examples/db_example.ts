import {Sequelize} from "sequelize";

const {Model, DataTypes} = require("sequelize");



const checkConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Подключение к БД успешно!');
    } catch (error) {
        if (error instanceof  Error) {
            console.error('❌ Ошибка подключения:', error.message);
        }
    }
};

checkConnection(); // Просто вызываем функцию



async function getUsers() {
    return await User.findAll();
}

(async () => {
    const users = await getUsers();
    users.forEach((user:User) => console.log(user.name));
})();