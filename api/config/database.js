const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.development.url, {
    dialet: config.development.dialect
});

module.exports = sequelize;