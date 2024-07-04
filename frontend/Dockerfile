# Use Node.js v22.3.0 as a parent image
FROM node:22.3.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application for production
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Run the Next.js application
CMD ["npm", "start"]