var expect = require("chai").expect;
var request = require("request");

describe("Color Code Converter API", function() {
	var host = "http://localhost:8080/";

	describe("RGB to Hex conversion", function() {
		var url = host + "rgbToHex?red=255&green=255&blue=255";

		it("returns status 200", function(done) {
			request(url, function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				done();
			});
		});

		it("returns the color in hex", function(done) {
			request(url, function(error, response, body) {
				expect(body).to.equal("ffffff");
				done();
			});
		});
	});

	describe("Hex to RGB conversion", function() {
		var url = host + "hexToRgb?hex=ff00ff";

		it("returns status 200", function(done) {
			request(url, function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				done();
			});
		});

		it("returns the color in RGB", function(done) {
			request(url, function(error, response, body) {
				expect(body).to.equal("[255,0,255]");
				done();
			});
		});
	});
});
