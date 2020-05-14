const serviceLocator = require('../config/serviceLocator');

module.exports = class MainRouter {
  constructor(express) {
    this.express = express;
    return this.initializeRouter();
  }

  initializeRouter() {
    const router = this.express.Router();
    const dummyRouter = serviceLocator.get('dummyRouter');
    router.use('/dummy', dummyRouter);
    router.use('/', (req, res) => {
      res.status(404).send({ message: 'not found' });
    });
    return router;
  }
};
