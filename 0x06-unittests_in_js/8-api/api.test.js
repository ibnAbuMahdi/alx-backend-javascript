const http = require("http");
const app = require("./api"); // Assuming your Express server file is named "index.js"
const chai = require("chai");
const expect = chai.expect
const hostname = "localhost";
const port = 7865;
const Mocha = require('mocha');
const mocha = new Mocha({ exit: true});

describe("Index Route", () => {
  it("should return a welcome message", (done) => {
    const options = {
      hostname: hostname,
      port: port,
      path: "/",
      method: "GET",
    };

    const req = http.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).to.equal(200);
        expect(data).to.equal("Welcome to the payment system");
	      done();
	      process.exit(0);
      });
    });
    req.on("error", (error) => {
      done(error);
    });

    req.end();
  });
});

