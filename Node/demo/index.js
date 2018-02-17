var calculatorRef = require('./calculator.js');
//import calculatorRef from './calculator.js';
var { sub } = require('./calculator.js');
//import { sub } from './calculator.js';

var calculatorRef2 = require('./calculator2.js');
var { mul } = require('./calculator2.js');

var Student = require('./student.js');
var Student2 = require('./student2.js');

var Son = require('./inheritance.js');

var http = require('http');
var fs = require('fs');

console.log('Welcome to Demo');
console.log('Addition of 1 & 2 is ' + calculatorRef.add(1,2));
console.log('Subtraction of 1 & 2 is ' + sub(1,2));

calculatorRef.mul(2, 5);

calculatorRef2.add(1,2);
calculatorRef2.sub(1,2);
calculatorRef2.mul(1,2);
mul(1,2);
calculatorRef2.div(1,2);

var studObj = new Student();
studObj.setName('Neha');
console.log(studObj.getName());

var studObj2 = new Student2();
console.log(studObj2.getFullName());

var son1 = new Son();
son1.getAge();
son1.getGender();
son1.getName();

http.createServer(function(req, res){
	//res.end('Welcome to demo page');

	fs.readFile("AppPages/demo5.html", function (error, pgResp) {
		if (error) {
			res.writeHead(404);
			res.write('Contents you are looking are Not Found');
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			//console.log(pgResp);
			res.write(pgResp);
		}
		 
		res.end();
	});
}).listen(3000);