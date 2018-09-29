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

// function types
let myMul: (a: number, b: number) => number;
// myMul = sayHello;
// myMul();
myMul = mul;
myMul(1, 2);

// objects
let userData: {name: string, age: number} = {
	name: 'John',
	age: 20,
};

// userData = {
// 	a: "hello",
// 	b: 22,
// };

userData = {
	name: "hello",
	age: 22,
};

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex: Complex = {
	data: [1, 2, 3],
	output: function(all: boolean): number[] {
		return this.data
	}
}

let complex2: Complex = {
	data: [1, 2, 3],
	output: function(all: boolean): number[] {
		return this.data
	}
}

// union types
let myRealRealAge: number | string;
myRealRealAge = 21;
myRealRealAge = '21';

// check types
let finalValue = 1;

if (typeof finalValue == 'number') {
	// console.log('Final value is number')
}
