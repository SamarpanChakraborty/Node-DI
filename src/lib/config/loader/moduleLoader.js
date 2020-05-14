/* eslint-disable global-require */
const serviceLocator = require('../serviceLocator');
const config = require('../config')();
require('../forEach');

const fileReader = serviceLocator.get('fileReader');

serviceLocator.register('axiosInstance', () => {
  const axios = serviceLocator.get('axios');
  const AxiosInstance = require('../axios');
  return new AxiosInstance(axios, config);
});

serviceLocator.register('dummyService', () => {
  const axiosInstance = serviceLocator.get('axiosInstance');
  const DummyService = require('../../dummy/dummyService');
  return new DummyService(axiosInstance);
});
serviceLocator.register('dummyController', () => {
  const dummyService = serviceLocator.get('dummyService');
  const DummyController = require('../../dummy/dummyController');
  return new DummyController(dummyService);
});
serviceLocator.register('dummyRouter', () => {
  const express = serviceLocator.get('express');
  const DummyController = serviceLocator.get('dummyController');
  const DummyRouter = require('../../dummy/dummyRouter');
  return new DummyRouter(express, DummyController);
});

// Swagger
serviceLocator.register('swaggerRouter', () => {
  const express = serviceLocator.get('express');
  const swaggerUi = serviceLocator.get('swaggerUi');
  const swaggerJSDoc = serviceLocator.get('swaggerJSDoc');
  const SwaggerSetup = require('../../swaggerApiDoc/swaggerSetup');
  return new SwaggerSetup(express, swaggerUi, swaggerJSDoc);
});

serviceLocator.register('mainRouter', () => {
  const express = serviceLocator.get('express');
  const MainRouter = require('../../server/MainRouter');
  return new MainRouter(express);
});


/* eslint-enable global-require */
