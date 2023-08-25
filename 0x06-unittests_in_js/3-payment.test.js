const sendPayment = require("./3-payment");
const utils = require("./utils");
const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;

describe("use sinon.spy to test calculateNumber", function(){
	it("sendPaymentRequestToApi", function(){
		sinon.spy(utils, "calculateNumber");
		sendPayment(100, 20);
		expect(utils.calculateNumber.called).to.be.true;
		expect(utils.calculateNumber.getCall(0).notCalledWith(100, 20)).to.be.true;
		expect(utils.calculateNumber.getCall(0).args[1]).to.be.equal(100);
		expect(utils.calculateNumber.getCall(0).args[2]).to.be.equal(20);
	});
});

