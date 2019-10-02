const users = require('../routes/users');
const tours = require('../routes/tours');
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const AppError = require('../utils/appError');
const globalErrorHandler = require('../middlewares/errorHandler');

module.exports = function(app) {
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use('/api/v1/users', users);
  app.use('/api/v1/tours', tours);
  app.all('*', (req, res, next) => {
    next(
      new AppError(`Can't find the url ${req.originalUrl} on the server`, 404)
    );
  });
  app.use(globalErrorHandler);
};
