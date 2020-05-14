module.exports = class DummyController {
  constructor(dummyService) {
    this.dummyService = dummyService;
  }

  async fetchDummy(req, res) {
    try {
      const data = await this.dummyService.getDummy();
      res.send(data);
    } catch (e) {
      res.status(500).send();
    }
  }
};
