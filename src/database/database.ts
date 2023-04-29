import { Sequelize } from "sequelize";

const connectionDatabase = new Sequelize ({
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'smartphone',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        timestamps: false,
    }
});

export default connectionDatabase;