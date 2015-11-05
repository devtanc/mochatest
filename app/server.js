var express = require("express");
var app = express();
var converter = require("./converter");

app.get("/rgbToHex", function(req, res) {
	res.send(converter.rgbToHex(parseInt(req.query.red, 10), parseInt(req.query.green, 10), parseInt(req.query.blue, 10)));
});

app.get("/hexToRgb", function(req, res) {
	res.send(JSON.stringify(converter.hexToRgb(req.query.hex)));
});

app.listen(8080);
