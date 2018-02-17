class Father {
	getAge(){
		console.log(45);
	}
	getGender(){
		console.log('Male')
	}
}

class Son extends Father {
	getAge(){
		console.log(20);
	}
	getName(){
		console.log("Venkat Kumar");
	}
}

module.exports = Son;