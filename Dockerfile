# Use an official Node runtime as a base image
FROM node:20.10.0-alpine

# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package.json  ./
# Install dependencies
RUN npm install
# Copy the entire project to the working directory
COPY . .
# Build the React app
RUN npm run build

EXPOSE 3000
# Command to run the Nginx server
CMD ["npm", "start"]