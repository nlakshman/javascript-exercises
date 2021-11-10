const add = function(int1, int2) {
	return int1 + int2;
};

const subtract = function(int1, int2) {
	return int1 - int2;
};

const sum = function(intArray) {
	let sum = 0;
	for (let i = 0; i < intArray.length; i++) {
		sum += intArray[i];
	}
	return sum;
};

const multiply = function(intArray) {
	let product = 1;
	for (let i = 0; i < intArray.length; i++) {
		product *= intArray[i];
	}
	return product;
};

const power = function(int1, int2) {
	return int1 ** int2;
};
 
const factorial = function(startInt) {
	let factorial = 1;
	for (let i = startInt; i > 0; i--)
		factorial *= i;
	return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
