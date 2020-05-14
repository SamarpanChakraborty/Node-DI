module.exports = class DummyRouter {
  constructor(express, dummyController) {
    this.express = express;
    this.dummyController = dummyController;
    return this.initializeRouter();
  }

  initializeRouter() {
    const router = this.express.Router();
    router.route('/')
      .get((req, res) => this.dummyController.fetchDummy(req, res));

    return router;
  }
};
