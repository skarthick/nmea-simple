"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("should");
var index_1 = require("../index");
describe("HDM", function () {
    it("parser", function () {
        var packet = index_1.parseNmeaSentence("$IIHDM,201.5,M*24");
        packet.should.have.property("sentenceId", "HDM");
        packet.should.have.property("sentenceName", "Heading - magnetic");
        packet.should.have.property("heading", 201.5);
    });
    it("encoder", function () {
        var sentence = index_1.encodeNmeaPacket({
            sentenceId: "HDM",
            heading: 201.5
        }, "II");
        sentence.should.equal("$IIHDM,201.5,M*24");
    });
});
