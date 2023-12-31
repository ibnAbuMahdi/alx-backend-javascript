const chai = require("chai");
const expect = chai.expect;
const calcNumber = require("./2-calcul_chai")

describe("calculate numbers", function(){
    it("should round two numbers and add them", function(){
        expect(calcNumber("SUM", 3.4, 3.5)).to.equal(7);
    });

    it("should round and add two negative numbers", function(){
        expect(calcNumber("SUM", -4.2, -1.6)).to.equal(-6);
    });

    it("should handle integers correctly", function(){
        expect(calcNumber("SUM", 2, 10)).to.equal(12);
    });

    it("should round two numbers and subtract them", function(){
        expect(calcNumber("SUBTRACT", 3.4, 3.5)).to.equal(-1);
    });

    it("should round and subtract two negative numbers", function(){
        expect(calcNumber("SUBTRACT", -4.2, -1.6)).to.equal(-2);
    });

    it("should handle integer subtraction correctly", function(){
        expect(calcNumber("SUBTRACT", 2, 10)).to.equal(-8);
    });

    it("should round two numbers and divide them", function(){
        expect(calcNumber("DIVIDE", 3.4, 3.5)).to.equal(3/4);
    });

    it("should round and divide two negative numbers", function(){
        expect(calcNumber("DIVIDE", -4.2, -1.6)).to.equal(2);
    });

    it("should handle integer division correctly", function(){
        expect(calcNumber("DIVIDE", 12, 3)).to.equal(4);
    });

    it("should handle division by 0 correctly", function(){
        expect(calcNumber("DIVIDE", 12, 0.3)).to.equal("Error");
    });
});
