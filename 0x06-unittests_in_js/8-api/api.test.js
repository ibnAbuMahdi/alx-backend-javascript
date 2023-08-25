const chai = require("chai");
const expect = chai.expect;
const request = require("request");
const chaiA = require("chai-as-promised");
chai.use(chaiA);

describe("Index page", function(){
	it("should test express server", function(){
		request("localhost/7865", function(err, r, body){
		expect(r).to.eventually.have.property("status");
		expect(body).to.eventually.be.type("string");
		});
});

});

