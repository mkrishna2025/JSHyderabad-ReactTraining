// private method
var printScreen = function(value){
	console.log('Result is ' + value);
}

// public methods
module.exports.add = function(x, y) {
	return x + y;
}

module.exports.sub = function(x, y) {
	return x - y;
}

module.exports.mul = function(x, y) {
	// accessing private method
	printScreen(x * y);
}

module.exports.div = function(x, y) {
	printScreen(x / y);
}