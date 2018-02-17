var calculator = {
	add: function(x, y){
		console.log('result from calculator2 is '+ (x + y));
	},
	sub: function(x, y){
		console.log(x - y);
	},
	mul: (x, y) => {
		console.log(x * y);
	},
	div: (x, y) => console.log(x/y)
}

module.exports = calculator;