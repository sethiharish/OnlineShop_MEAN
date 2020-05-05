const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  apis: ["./routes/*.js"],

  basePath: "/api",

  swaggerDefinition: {
    info: {
      description:
        "Swagger based UI for documenting and testing the Online Shop's Web Apis",
      swagger: "2.0",
      title: "Online Shop API",
      version: "1.0.0",
    },
  },
};

const specs = swaggerJsdoc(options);

module.exports = specs;
