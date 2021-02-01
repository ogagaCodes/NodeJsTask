const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require("./app/_helpers");

// Set up the express app
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// endpoints of apps
const getByStatusRouter = require("./app/routes").router;
 app.use(getByStatusRouter);
    
 const postSalesRouter = require("./app/routes").router;
 app.use(postSalesRouter);

// global error handler
app.use(errorHandler.errorHandler);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;