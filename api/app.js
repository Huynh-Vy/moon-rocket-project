const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database.js');
const categoryRoutes = require('./routes/categoryRoutes.js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Routes
// Redirect '/' to '/api'
app.use('/', (req, res, next) => {
    res.redirect('/api');
});
app.use('/api', categoryRoutes);

// Sync the database and start the server
sequelize.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch((err) => {
    console.error('Unable to connect to database:', err);
})

