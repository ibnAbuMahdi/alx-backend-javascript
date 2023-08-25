const sendPayment = require("./4-payment");
const utils = require("./utils");
const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;

describe("use sinon.spy to test calculateNumber", function(){
	const sandbox = sinon.createSandbox();
    beforeEach(function () {
        sandbox.spy(console, "log");
    });

    afterEach(function () {
        sandbox.restore();
    });

	
	it("should test sendPayment with 100, 20 call", function(){
		sendPayment(100, 20);
		expect(console.log.getCall(0).args[0]).to.be.equal("The total is: 120");
		expect(console.log.calledOnce).to.be.true;
	});


	it("should test sendPayment with 10, 10 call", function(){
		sendPayment(10, 10);
		expect(console.log.getCall(0).args[0]).to.be.equal("The total is: 20");
		expect(console.log.calledOnce).to.be.true;

	});
});

