# Moon Rocket Project

This project is a web application built using Next.js for the frontend and Node.js with Express for the backend. The application connects to a PostgreSQL database to manage and display data.

## Technologies Used

### Frontend:
- Next.js
- CSS

### Backend:
- Node.js
- Express
- Sequelize

### Database:
- PostgreSQL

## Project Structure

### Frontend (Next.js)
Frontend/
├── pages/
│ ├── index.js # Home page
│ ├── _app.js 
│ └── category/
│ └── [categoryId].js # Dynamic route for categories
├── styles/ 
│ └── Category.module.css # css styles for Category module 
│ └── Home.module.css # css styles for Home module 
│ └── styles.css 
├── .env # Environment variables
├── package-lock.json
├── package.json

### Backend (Node.js with Express)
api/
├── config/
│ └── config.js # configuration
│ └── database.js # Database configuration
├── controllers/
│ └── categoryController.js # Controller logic for categories
├── models/
│ ├── categories.js # Category model
│ ├── games.js # Game model
│ └── index.js # Sequelize model index
├── routes/
│ └── categoryRoutes.js # Route definitions for categories
├── seed/
│ ├── generateData.js # Script to generate sample data, and create data.json
│ ├── data.json # Seed data
│ ├── createTables.js # Script to create tables
│ └── seedDatabase.js # Script to seed the database
├── .env # Environment variables
└── app.js # Main application file


## How to Run the Application

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- PostgreSQL (v12.x or higher)

### Environment Variables
DATABASE_URL=DATABASE_URL_CONNECT_TO_PGADMIN
PORT=PORT_RUNNING_SERVER_APP
NEXT_PUBLIC_API_URL=URL_CONNECT_TO_BACKEND

### Installation

1. **Clone the repository**
git clone https://github.com/your-repo/moon-rocket.git
cd moon-rocket

2. **Install dependencies**
- Backend
express
body-parser
cors
dotenv
sequelize

-Frontend
next
react
react-dom
axios

3. **Run the app**
- Create and seed the database
cd api
node seed/generateData.js
node createTables.js
node seed/seedDatabase.js

- Run backend app
cd api
npm run dev

- Run frontend app
cd frontend
npm run dev

- Access the app on browser
http://localhost:3000
