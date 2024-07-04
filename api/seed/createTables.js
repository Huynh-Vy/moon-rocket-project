const Category = require('../models/categories');
const Game = require('../models/games');
const sequelize = require('../config/database');

async function createTables() {
    try {
        await Category.sync({ force: true }); // Create Category table
        await Game.sync({ force: true }); // Create Game table
        console.log('Tables created successfully');
    }  catch (err) {
        console.log('Error creating tables: ', err);
    } finally {
         // Connection to database close after create tables
        await sequelize.close();
    }
}

createTables();
