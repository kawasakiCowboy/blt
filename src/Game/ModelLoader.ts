import {DataTypes, Sequelize} from "sequelize";
import { User } from "./User";

export class ModelLoader {
    load(sequelize: Sequelize) {
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
    }
}