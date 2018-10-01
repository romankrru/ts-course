class Person {
	name: string;
	private type!: string;
	protected age: number = 27;

	constructor(name: string, public username: string) {
		this.name = name;
	}

	printAge() {
		console.log(this.age)
		this.setType("Old guy");
	}

	private setType(type: string) {
		this.type = type;
		console.log(this.type);
	}
}

const person = new Person("John", "username");
console.log(person);
person.printAge();


// Inheretance
class Max extends Person {
	constructor(username: string) {
		super("Max", username);
		this.age = 31;
	}
}

const max = new Max("Anna");
console.log(max);

// Getters and Setters
class Plant {
	private _species: string = "Default";

	set species(value: string) {
		if (value.length > 3) {
			this._species = value;
		} else {
			this._species = "Default";
		}
	}

	get species() {
		return this._species;
	}
}

let plant = new Plant();
console.log(plant.species);
plant.species = "Hi!!!"
console.log(plant.species)


// Static properties
class Helpers {
	static PI: number = 3.14;
	static calcCircumference(diameter: number): number {
		return this.PI * diameter;
	}
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(12));

// Abstract Classes
abstract class Project {
	projectName: string = "Default";
	budget!: number;

	abstract changeName(name: string): void;

	calcBudget() {
		return this.budget * 2;
	}
}

class ITProject extends Project {
	changeName(name: string): void {
		this.projectName = name;
	}
}

let newProject = new ITProject();
newProject.changeName("Super it project");
console.log(newProject);


// private constructors
class OnlyOne {
	private static instance: OnlyOne;

	private constructor(public readonly name: string) {}

	static getInstance() {
		if(!OnlyOne.instance) {
			OnlyOne.instance = new OnlyOne("The only one");
		}
		return OnlyOne.instance;
	}
}

// let wrong = new OnlyOne("the only one");
let right = OnlyOne.getInstance();
let right2 = OnlyOne.getInstance();
console.log(right.name)
// right.name = "Something else";
