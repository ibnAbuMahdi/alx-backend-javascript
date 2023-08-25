const http = require("http");
const app = require("./api"); // Assuming your Express server file is named "index.js"
const chai = require("chai");
const expect = chai.expect
const hostname = "localhost";
const port = 7865;



describe("Cart Page Route", () => {
  it("should return the payment methods object", (done) => {
    const options = {
      hostname,
      port,
      path: "/available_payments",
      method: "GET",
    };

    const req = http.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        const responseBody = JSON.parse(data);
        assert.strictEqual(res.statusCode, 200);
        assert.deepStrictEqual(responseBody, {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });

    req.end();
  });


  it("should return a welcome message with the username", (done) => {
    const userName = "JohnDoe";

    const options = {
      hostname,
      port,
      path: "/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const req = http.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(data, `Welcome ${userName}`);
        done();
      });
    });

    req.write(JSON.stringify({ userName }));
    req.end();
  });
});
