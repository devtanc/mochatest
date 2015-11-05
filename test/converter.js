var expect = require('chai').expect;
var converter = require("../app/converter.js");

describe("Color Code Converter", function() {
	describe("RGB to HEX Conversion", function() {
		it("converts the basic colors", function() {
			var redHex		= converter.rgbToHex(255,0,0);
			var greenHex	= converter.rgbToHex(0,255,0);
			var blueHex		= converter.rgbToHex(0,0,255);

			expect(redHex).to.equal("ff0000");
			expect(greenHex).to.equal("00ff00");
			expect(blueHex).to.equal("0000ff");
		});
	});
	describe("HEX to RGB Conversion", function() {
		it("converts the basic colors", function() {
			var redRgb		= converter.hexToRgb("ff0000");
			var greenRgb	= converter.hexToRgb("00ff00");
			var blueRgb		= converter.hexToRgb("0000ff");

			expect(redRgb).to.deep.equal([255,0,0]);
			expect(greenRgb).to.deep.equal([0,255,0]);
			expect(blueRgb).to.deep.equal([0,0,255]);
		});
	});
});
