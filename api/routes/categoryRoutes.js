const express = require('express');
const router = express.Router();
const { getAllCategories, getCategoryById, getCategoryGames } = require('../controllers/categoryController');

// Fetch all categories
router.get('/categories', getAllCategories);

// Fetch a single category by ID
router.get('/categories/:categoryId', getCategoryById);

// Fetch games by category with pagination
router.get('/categories/:categoryId/games', getCategoryGames)

module.exports = router;