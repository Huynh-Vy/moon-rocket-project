const fs = require('fs');
const path = require('path');
const Category = require('../models/categories');
const Game = require('../models/games');
const sequelize = require('../config/database');
const { categoryGameMapping, categories, games } = require('../seed/data.json');

async function seedDatabase() {
    try {
        // Clear existing data
        await Category.destroy({ where: {} });
        await Game.destroy({ where: {} });

        // Seed categories
        await Category.bulkCreate(categories);
    
        // Seed games
        await Game.bulkCreate(games);
        console.log('Database seeded successfully');
    } catch (err) {
        console.log('Error seeding database: ', err);
    } finally {
        // Connection to database close after seeding
        await sequelize.close();
    }
}
seedDatabase();