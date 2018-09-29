// string
let myName: string = 'John';
// myName = 2;

// numbers
let myAge = 24.4;
// myAge = 'John';

// boolean
let hasHobbies: boolean = true;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies = ["Cooking", "Sports"];
// hobbies = [100];
hobbies = ["100"];
// console.log(hobbies[0]);
// console.log(typeof hobbies)

// tuples
let address: [string, number] = ["Super street", 99];

// enums
enum Color {
	Grey, // 0
	Green = 100, // 100
	Blue // 101
}

let myColor: Color = Color.Blue;
// console.log(myColor);

let car: any = "BMW";
// console.log(car);
car = {brand: "BMW", series: 3};
// console.log(car);

// functions
function returnMyName(): string {
	return myName;
}
// console.log(returnMyName())

function sayHello(): void {
	console.log("hello");
	// return myName;
}

// argument types
function mul(v1: number, v2: number): number {
	return v1 * v2;
}
// console.log(mul(1, 2))


