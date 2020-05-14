/* eslint-disable global-require */
const serviceLocator = require('../serviceLocator');
const config = require('../config')();

serviceLocator.register('express', () => require('express'));

serviceLocator.register('bodyParser', () => require('body-parser'));

serviceLocator.register('cors', () => require('cors'));

serviceLocator.register('compression', () => require('compression'));

serviceLocator.register('lodash', () => require('lodash'));

serviceLocator.register('moment', () => require('moment'));

serviceLocator.register('axios', () => require('axios'));

serviceLocator.register('chai', () => require('chai'));

serviceLocator.register('chai-http', () => require('chai-http'));

serviceLocator.register('joi', () => require('@hapi/joi'));

serviceLocator.register('sequelize', () => require('sequelize'));

serviceLocator.register('randomstring', () => require('randomstring'));

serviceLocator.register('OAuth2Server', () => require('oauth2-server'));

// Swaggers
serviceLocator.register('swaggerUi', () => require('swagger-ui-express'));

serviceLocator.register('swaggerJSDoc', () => require('swagger-jsdoc'));
// json-file-reader
serviceLocator.register('fileReader', () => require('./../../../utility/file-json-reader'));

serviceLocator.register('logger', () => require('../../logger').create(config.application_logging));
/* eslint-enable global-require */
