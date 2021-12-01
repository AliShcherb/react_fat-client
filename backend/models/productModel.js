import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Article = db.define('articles',{
    author:{
        type: DataTypes.STRING
    },
    text:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default Article;