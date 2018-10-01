// let & const
let variable = "test";
console.log(variable);
variable = "another var";
console.log(variable);

const maxLevel = 100;
console.log(maxLevel);
// maxLevel = 99;

// block scope
function reset() {
	let variable = null;
	console.log(variable);
}
reset();
console.log(variable);

// arrow functions
const addNumbers = function(number1: number, number2: number): number {
	return number1 + number2;
};
console.log(addNumbers(2, 3))

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(2, 4))

// arrow functions variations
const greet = () => console.log('Hello');

// default parameters
// ...

// spread operator

// rest operator

// destructuring

// template literals

// other features
