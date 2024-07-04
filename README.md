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

![frontend](https://github.com/Huynh-Vy/moon-rocket-project/assets/87691625/1244aadc-c1ec-4c2a-8f10-cd408ffc5564)

### Backend (Node.js with Express)

![backend](https://github.com/Huynh-Vy/moon-rocket-project/assets/87691625/5bf2aac1-fed3-47c1-8c1e-a2b03e438416)


## How to Run the Application

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- PostgreSQL (v12.x or higher)

### Environment Variables
- DATABASE_URL=DATABASE_URL_CONNECT_TO_PGADMIN
- PORT=PORT_RUNNING_SERVER_APP
- NEXT_PUBLIC_API_URL=URL_CONNECT_TO_BACKEND

### Installation

**Clone the repository**
   
- git clone [https://github.com/your-repo/moon-rocket.git](https://github.com/Huynh-Vy/moon-rocket-project.git)
- git clone [git@github.com:Huynh-Vy/moon-rocket-project.git] (git@github.com:Huynh-Vy/moon-rocket-project.git)
- cd moon-rocket

**Install dependencies**

**Backend**
- express
- body-parser
- cors
- dotenv
- sequelize

**Frontend**
- next
- react
- react-dom
- axios

**Run the app**

**Create and seed the database**
- cd api
- node seed/generateData.js
- node createTables.js
- node seed/seedDatabase.js

**Run backend app**
- cd api
- npm run dev

**Run frontend app**
- cd frontend
- npm run dev

**Access the app on browser**
- http://localhost:3000
