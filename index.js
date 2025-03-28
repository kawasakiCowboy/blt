const express = require('express')
const { Sequelize, Model, DataTypes} = require('sequelize');
const WebSocket = require('ws');
const http = require('http');

const app = express()
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const sequelize = new Sequelize('postgres://postgres:example@localhost:5432/postgres') // Example for postgres

const checkConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Подключение к БД успешно!');
    } catch (error) {
        console.error('❌ Ошибка подключения:', error.message);
    }
};

checkConnection(); // Просто вызываем функцию

// Обработчик WebSocket-соединений
wss.on('connection', (ws) => {
    console.log('Новое подключение!');

    // Отправка сообщения клиенту
    ws.send(JSON.stringify({ type: 'welcome', message: 'Привет от сервера!' }));

    // Обработка входящих сообщений
    ws.on('message', (data) => {
        const message = JSON.parse(data);
        console.log('Получено:', message);

        // Пример логики: пересылка сообщения всем клиентам
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({
                    type: 'broadcast',
                    user: message.user,
                    text: message.text
                }));
            }
        });
    });

    // Закрытие соединения
    ws.on('close', () => {
        console.log('Клиент отключился');
    });
});

// Запуск сервера
// server.listen(3000, () => {
//     console.log('Сервер запущен на порту 3000');
// });

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
    users.forEach(user => console.log(user.name));
})();