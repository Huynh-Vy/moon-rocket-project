const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Game = require('../models/games');

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
    },
    displayName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Category;