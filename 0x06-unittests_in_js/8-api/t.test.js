const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api'); // Make sure to provide the correct path

chai.use(chaiHttp);
const expect = chai.expect;

describe('Express App', () => {
  // Test the root path
  describe('GET /', () => {
    it('should return a welcome message', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Welcome to the payment system');
          done();
        });
    });
  });
});

