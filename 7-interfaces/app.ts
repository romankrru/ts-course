interface NamedPerson {
	firstName: string;
	age?: number;
	[propName: string]: any;
	greet(lastName: string): void;
}

function greet(person: NamedPerson) {
	console.log("Hello, " + person.firstName)
}

function changeName(person: NamedPerson) {
	person.firstName = "Anna"
}

const person: NamedPerson = {
	firstName: "Max",
	age: 27,
	greet(lastName: string) {
		console.log(this.firstName + lastName)
	}
}

// greet({firstName: "Max", age: 27, hobbies: ["Sports"]})
changeName(person)
person.greet("Anything")
