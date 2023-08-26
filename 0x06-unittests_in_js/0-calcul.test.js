const chai = require("chai");
const assert = require('assert');
const calcNumber = require("./0-calcul")

describe("calculate numbers", function(){
	it("should round two numbers and add them", function(){
		assert.equal(calcNumber(3.4, 4), 7);

	});
	it("should round two negative numbers", function(){
		assert.equal(calcNumber(-4.2, -1.6), -6);
	});
	it("should handle integers correctly", function(){
		assert.equal(calcNumber(2.2, 10), 12);
	});
});
