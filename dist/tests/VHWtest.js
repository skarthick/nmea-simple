"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("should");
var index_1 = require("../index");
describe("VHW", function () {
    it("parser", function () {
        var packet = index_1.parseNmeaSentence("$IIVHW,245.1,T,245.1,M,000.01,N,000.01,K*55");
        packet.should.have.property("sentenceId", "VHW");
        packet.should.have.property("sentenceName", "Water speed and heading");
        packet.should.have.property("degreesTrue", 245.1);
        packet.should.have.property("degreesMagnetic", 245.1);
        packet.should.have.property("speedKnots", 0.01);
        packet.should.have.property("speedKmph", 0.01);
    });
});
