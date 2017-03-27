"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("should");
var index_1 = require("../index");
describe("GSA", function () {
    it("parser", function () {
        var packet = index_1.parseNmeaSentence("$GPGSA,A,3,12,05,25,29,,,,,,,,,9.4,7.6,5.6*37");
        packet.should.have.property("sentenceId", "GSA");
        packet.should.have.property("sentenceName", "Active satellites and dilution of precision");
        packet.should.have.property("selectionMode", "automatic");
        packet.should.have.property("fixMode", "3D");
        packet.should.have.property("satellites", [12, 5, 25, 29]);
        packet.should.have.property("PDOP", 9.4);
        packet.should.have.property("HDOP", 7.6);
        packet.should.have.property("VDOP", 5.6);
    });
});
