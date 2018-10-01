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
