# Step 1: Use an official Node.js image to build the app
FROM node:19-bullseye
# FROM node:16

EXPOSE 3000

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the app files
COPY . .

# Step 6: Build the app for production
RUN npm run build

CMD ["npm", "start"]
