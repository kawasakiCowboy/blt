import express from 'express';

import {WebSocketServer} from 'ws';
import http from 'http';

const app = express()
const server = http.createServer(app);
const wss = new WebSocketServer({server});

// Обработчик WebSocket-соединений
wss.on('connection', (ws) => {
    console.log('Новое подключение!');

    // Отправка сообщения клиенту
    ws.send(JSON.stringify({type: 'welcome', message: 'Привет от сервера!'}));

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
server.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
