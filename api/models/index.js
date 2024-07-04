const Category = require('./categories');
const Game = require('./games');

// Define associations here
Category.hasMany(Game, { foreignKey: 'categoryId' });
Game.belongsTo(Category, { foreignKey: 'categoryId' });

module.exports = {
  Category,
  Game
};