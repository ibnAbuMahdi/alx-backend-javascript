const sendPayment = require("./4-payment");
const utils = require("./utils");
const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;

describe("sendPaymentRequestToApi", function(){
	const sandbox = sinon.createSandbox();
    beforeEach(function () {
        sandbox.spy(console, "log");
    });

    afterEach(function () {
        sandbox.restore();
    });

	it("should test function call", function(){
		const stub = sinon.stub(utils, "calculateNumber").returns(10);
		sendPayment(100, 20);
		expect(utils.calculateNumber.called).to.be.true;
		expect(utils.calculateNumber.getCall(0).returned(10)).to.be.true;
		expect(utils.calculateNumber.getCall(0).args[2]).to.be.equal(20);
		expect(utils.calculateNumber.getCall(0).args[1]).to.be.equal(100);
		expect(utils.calculateNumber.getCall(0).args[0]).to.be.equal("SUM");
		expect(console.log.getCall(0).args[0]).to.be.equal("The total is: 10")
	});
});

