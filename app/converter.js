module.exports.rgbToHex = function(red, green, blue) {
	var rHex = red.toString(16);
	var gHex = green.toString(16);
	var bHex = blue.toString(16);

	return padHex(rHex) + padHex(gHex) + padHex(bHex);
}

function padHex(given) {
	return given.length === 1 ? "0" + given : given;
}

module.exports.hexToRgb = function(hex) {
	var rgbArray = hex.match(/.{2}/g);

	for (var i = 0; i < rgbArray.length; i++) {
		rgbArray[i] = parseInt(rgbArray[i], 16);
	}

	return rgbArray;
}
