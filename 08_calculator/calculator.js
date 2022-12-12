const add = function(x, y) {
  return parseInt(x + y);
};

const subtract = function(x, y) {
	return parseInt(x - y);
};

const sum = function(array) {
	let initialSum = 0;
  let sumWithInitial = array.reduce((total, current) => total + current, initialSum);
  return sumWithInitial;
};

const multiply = function(array) {
  let initialProduct = 1;
  let productWithInitial = array.reduce((total, current) => total * current, initialProduct);
  return productWithInitial;
};

const power = function(x,y) {
	return parseInt(x ** y);
};

const factorial = function(x) {
  let answer = 1;
  const count = x;
  for (i = 1; i <= x; i++) {
    answer *= x - (x - i)
  }
  return parseInt(answer)
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
