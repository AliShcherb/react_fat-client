import { Sequelize } from "sequelize";

const db = new Sequelize('articles', 'root', 'ZfJ75gPhsKrHEej5', {
    host: "localhost",
    dialect: "mysql"
});

export default db;