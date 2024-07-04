const { Category, Game } = require('../models/index');
const { fn, col, literal } = require('sequelize');

// Fetch all categories with their game counts
async function getAllCategories(req, res) {
    try {
        const categories = await Category.findAll({
            attributes: [
                'id',
                'displayName',
                // Count the number of games in each category and alias 
                // it as 'gameCount'
                [fn('COUNT', col('Games.id')), 'gameCount']
            ],
            // Include the Game model but do not select any attributes from it
            include: [{
                model: Game,
                attributes: [] 
            }],
            // Group the results by categoryId to count games per category
            group: ['Category.id'],
            // Order the results by gameCount in descending order
            order: [literal('"gameCount" DESC')]
        });

        return res.status(200).json(categories);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

// Fetch category by Id
async function getCategoryById(req, res) {
    try {
        const { categoryId } = req.params;

        // Fetch category name
        const category = await Category.findOne({
            where: { id: categoryId },
            attributes: [ 'id' , 'displayName'],
        });

        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        return res.status(200).json(category);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

// Fetch game list based on specific category with pagination
async function getCategoryGames(req, res) {
    try {
        const { categoryId } = req.params;
        const { page = 1, limit = 12 } = req.query;

        const offset = (page - 1) * limit;

        // Fetch category name
        const category = await Category.findOne({
            where: { id: categoryId },
            attributes: ['displayName'],
        });
        
        if (!category) {
            return res.status(404).json({ error: 'Category is not found' });
        }

        const games = await Game.findAndCountAll({
            where : { categoryId },
            attributes: ['id', 'displayName', 'thumbnailUrl'],
            limit: parseInt(limit, 10),
            offset: parseInt(offset, 10)
        });

        return res.status(200).json({
            categoryId: categoryId,
            displayName: category.displayName,
            games: games.rows,
            totalGames: games.count,
        });
    } catch (err) {
        return res.status(500).json({ error: err });
    }   
}

module.exports = { 
    getAllCategories, 
    getCategoryById,  
    getCategoryGames 
};
