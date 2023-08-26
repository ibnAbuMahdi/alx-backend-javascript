const http = require("http");
const app = require("./api"); // Assuming your Express server file is named "index.js"
const chai = require("chai");
const expect = chai.expect
const hostname = "localhost";
const port = 7865;

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
      });
    });

    req.on("error", (error) => {
      done(error);
    });

    req.end();
  });

  it("should return a 200 status code when :id is a number", (done) => {
    const cartId = 123;

    const options = {
      hostname: hostname,
      port: port,
      path: "/cart/"+cartId,
      method: "GET",
    };

    const req = http.request(options, (res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });

    req.on("error", (error) => {
      done(error);
    });

    req.end();
  });

  it("should return a 404 status code when :id is NOT a number", (done) => {
    const invalidCartId = "abc";

    const options = {
      hostname: hostname,
      port: port,
      path: `/cart/${invalidCartId}`,
      method: "GET",
    };

    const req = http.request(options, (res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });

    req.on("error", (error) => {
      done(error);
    });

    req.end();
  });
});
