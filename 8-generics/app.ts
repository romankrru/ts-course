// Simple generic
function echo(data: any) {
	return data;
}

console.log(echo("Max").length)
console.log(echo(27).length)
console.log(echo({name: "Max", age: 27}))

// Better Generic
function betterEcho<T>(data: T) {
	return data;
}

console.log(betterEcho("Max").length)
console.log(betterEcho<number>(27))
console.log(betterEcho({name: "Max", age: 27}).name)

// Buil in generic
const testResult: Array<number> = [1.93, 2.33];
testResult.push(1);
// testResult.push('str');

// Arrays
function printAll<T>(args: T[]) {
	args.forEach(el => console.log(el));
}

printAll<string>(["apples", "banana"]);
// printAll(1);


// Using generic types
const echo2: <T>(data: T) => T = betterEcho;


// Generic classes
// class SimpleMath<T extends U, U extends number | string> {
// 	baseValue: T;
// 	multiplyValue: U;

// 	caclucalte(): number {
// 		return +this.baseValue * +this.multiplyValue;
// 	}
// }

// const simpleMath = new SimpleMath<string, string>();
// simpleMath.baseValue = '10';
// simpleMath.multiplyValue = '32';
// console.log(simpleMath.caclucalte());
