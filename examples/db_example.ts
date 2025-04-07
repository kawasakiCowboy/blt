import {Sequelize} from "sequelize";

const {Model, DataTypes} = require("sequelize");

const sequelize = new Sequelize('postgres://postgres:example@localhost:5432/postgres') // Example for postgres


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


class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Users', // We need to choose the model name
        tableName: 'users',
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
)
async function getUsers() {
    return await User.findAll();
}

(async () => {
    const users = await getUsers();
    users.forEach((user:User) => console.log(user.name));
})();