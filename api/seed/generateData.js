const fs = require('fs');
const { faker } = require('@faker-js/faker');

const NUM_CATEGORIES = 10;
const NUM_GAMES = 500;

function generateUniqueCategoryNames() {
    const categorieNames = new Set();
    while (categorieNames.size < NUM_CATEGORIES) {
        categorieNames.add(faker.commerce.department());
    }
    return Array.from(categorieNames);
}

function generateUniqueGameNames() {
    const gameNames = new Set();
    while (gameNames.size < NUM_GAMES) {
        gameNames.add(faker.commerce.productName());
    }
    return Array.from(gameNames);
}

// Generate categories
function generateCategories(uniqueCategoryNames) {
    return uniqueCategoryNames.map(name => ({
        id: faker.string.uuid(),
        displayName: name,
    }));
} 

// Generate Games
function generateGames(uniqueGameNames, categories) {
    const games = [];
    for (let i = 0; i < uniqueGameNames.length; i++) {
        games.push({
            id: faker.string.uuid(),
            displayName: uniqueGameNames[i],
            thumbnailUrl: `https://placehold.co/500x500?text=Game+${i + 1}`,
            categoryId: faker.helpers.arrayElement(categories).id
        });
    }
    return games;
}


function generateData() {
    const uniqueCategoryNames = generateUniqueCategoryNames();
    const uniqueGameNames = generateUniqueGameNames();
    const categories = generateCategories(uniqueCategoryNames);
    const games = generateGames(uniqueGameNames, categories);

    return {
        categories: categories,
        games: games,
    };
}

function saveDatatoFile(data, filePath = './data.json') {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Generate data and save to file
const data = generateData();
saveDatatoFile(data);