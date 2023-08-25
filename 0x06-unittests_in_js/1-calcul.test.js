const chai = require("chai");
const assert = require("assert");
const calcNumber = require("./1-calcul")

describe("calculate numbers", function(){
	it("should round two numbers and add them", function(){
		assert(calcNumber("SUM", 3.4, 3.5) === 7);

	});
	it("should round and add two negative numbers", function(){
		assert(calcNumber("SUM", -4.2, -1.6) === -6);
	});
	it("should handle integers correctly", function(){
		assert(calcNumber("SUM", 2, 10) === 12);
	});
	 it("should round two numbers and subtract them", function(){
                assert(calcNumber("SUBTRACT", 3.4, 3.5) === -1);

        });
        it("should round and subtract two negative numbers", function(){
                assert(calcNumber("SUBTRACT", -4.2, -1.6) === -2);
        });
        it("should handle integer subtraction correctly", function(){
                assert(calcNumber("SUBTRACT", 2, 10) === -8);
        });
	 it("should round two numbers and divide them", function(){
                assert(calcNumber("DIVIDE", 3.4, 3.5) === 3/4);

        });
        it("should round and divide two negative numbers", function(){
                assert(calcNumber("DIVIDE", -4.2, -1.6) === 2);
        });
        it("should handle integer division correctly", function(){
                assert(calcNumber("DIVIDE", 12, 3) === 4);
        });
	 it("should handle division by 0 correctly", function(){
                assert(calcNumber("DIVIDE", 12, 0.3) === "Error");
        });
});
