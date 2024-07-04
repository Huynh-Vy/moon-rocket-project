const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('../models/categories');

const Game = sequelize.define('Game', {
    id : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
    },
    displayName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thumbnailUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Category,
            key: 'id'
        },
        onDelete: 'CASCADE', // Cascade delete if Category is deleted
        onUpdate: 'CASCADE' // Cascade update if Category id is updated,
    },
});

module.exports = Game;