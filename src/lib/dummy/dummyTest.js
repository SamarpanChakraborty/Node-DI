require('dotenv/config');
require('../config/validateEnv');
require('../config/loader/packageLoader');
require('../config/loader/moduleLoader');
require('../config/loader/serverLoader');

const serviceLocator = require('../config/serviceLocator');

const chai = serviceLocator.get('chai');
const chaiHttp = serviceLocator.get('chai-http');
const server = serviceLocator.get('server');
chai.should();

chai.use(chaiHttp);

// Our parent block
describe('Dummy API', () => {
  /*
   * Test the /GET route
   */
  describe('/GET Dummy', () => {
    it('it should GET all the region', (done) => {
      chai
        .request(server)
        .get('/api/v1/dummy')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
