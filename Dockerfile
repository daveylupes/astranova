# Step 1: Use an official Node.js image to build the app
FROM node:16-alpine as build

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

# Step 7: Use NGINX to serve the production build
FROM nginx:stable-alpine

# Step 8: Copy the build output from the previous step to the NGINX html directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Copy the NGINX configuration file
COPY --from=build /app/build /usr/share/nginx/html

# Step 10: Expose port 3000 to make the app accessible on this port
EXPOSE 3000

# Step 11: Start NGINX
CMD ["nginx", "-g", "daemon off;"]
