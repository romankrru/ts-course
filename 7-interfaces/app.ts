interface NamedPerson {
	firstName: string;
	age?: number;
	[propName: string]: any;
}

function greet(person: NamedPerson) {
	console.log("Hello, " + person.firstName)
}

function changeName(person: NamedPerson) {
	person.firstName = "Anna"
}

const person = {
	firstName: "Max",
	age: 27,
}

greet({firstName: "Max", age: 27, hobbies: ["Sports"]})
changeName(person)
