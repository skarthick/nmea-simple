"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("should");
var index_1 = require("../index");
describe("RMC", function () {
    it("parser", function () {
        var packet = index_1.parseNmeaSentence("$GPRMC,123519,A,4807.038,N,01131.000,E,022.4,084.4,230394,003.1,W*6A");
        packet.should.have.property("sentenceId", "RMC");
        packet.should.have.property("sentenceName", "Recommended minimum navigation information");
        packet.should.have.property("datetime", new Date(Date.UTC(1994, 3, 23, 12, 35, 19)));
        packet.should.have.property("status", "valid");
        packet.should.have.property("latitude", 48.1173);
        packet.should.have.property("longitude", 11.516666666666667);
        packet.should.have.property("speedKnots", 22.4);
        packet.should.have.property("trackTrue", 84.4);
        packet.should.have.property("variation", 3.1);
        packet.should.have.property("variationPole", "W");
    });
});
