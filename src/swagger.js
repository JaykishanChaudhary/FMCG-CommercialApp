
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Define Swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'API documentation for your backend',
    },
    servers: [{ url: 'http://localhost:5000' }], // Replace with your server URL
  },
  apis: ['./Routes/ProductRoute.js', './Routes/UserRoute.js'], // Path to the API route files (adjust the path based on your actual folder structure)
};

// Create Swagger specs
const specs = swaggerJsdoc(swaggerOptions);

module.exports = { specs, swaggerUi };
