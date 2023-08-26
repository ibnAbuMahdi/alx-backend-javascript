const chai = require('chai');
const expect = chai.expect;
const chaiA = require("chai-as-promised");
chai.use(chaiA);
const getPayment = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function(){
	it("should return resolve with predefined object if success", function(){
		expect(getPayment(true)).to.eventually.have.property("data");
	});
});
