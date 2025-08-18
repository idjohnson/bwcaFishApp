# Use Node.js 20 as the base image
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY *.js ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

ENV OTEL_EXPORTER_OTLP_ENDPOINT=""
ENV OTEL_EXPORTER_OTLP_APIKEY=""

# Start the application
CMD ["npm", "start"]
#harbor.freshbrewed.science/library/bwcafish:0.1.1
