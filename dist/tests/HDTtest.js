"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("should");
var index_1 = require("../index");
describe("HDT", function () {
    it("parser", function () {
        var packet = index_1.parseNmeaSentence("$IIHDT,234.2,T*25");
        packet.should.have.property("sentenceId", "HDT");
        packet.should.have.property("sentenceName", "Heading - true");
        packet.should.have.property("heading", 234.2);
    });
    it("encoder", function () {
        var sentence = index_1.encodeNmeaPacket({
            sentenceId: "HDT",
            heading: 234.2
        }, "II");
        sentence.should.equal("$IIHDT,234.2,T*25");
    });
});
