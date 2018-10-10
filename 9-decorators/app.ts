function logged(constructorFn: Function) {
	console.log(constructorFn);
}

@logged
class Person {

}

// Factory
function logging(value: boolean): Function {
	return function(constructorFn: Function) {
		return value ? logged : null;
	}
}

@logging(true)
class Car {

}


// Advanced
function printable(constructorFn: Function) {
	constructorFn.prototype.print = function() {
		console.log(this);
	}
}

@logging(true)
@printable
class Plant {
	name = "Green Plant"
}

const p = new Plant();
(<any>p).print()

function editable(value: boolean) {
	return function(target: any, propName: string, descriptor: PropertyDescriptor) {
		descriptor.writable = value;
	}
}

function overWritable(value: boolean): Function {
	return function(target: any, property: string): any {
		const newDescriptor: PropertyDescriptor = {
			writable: value,
			value: '1234'
		}

		return newDescriptor
	}
}

// Method decorators
// Property decorators
class Project {
	@overWritable(false)
	projectName: string;

	constructor(name: string) {
		this.projectName = name;
	}

	@editable(false)
	calcBudget() {
		console.log(100);
	}
}

const proj = new Project('Super project');
proj.calcBudget();
proj.calcBudget = function() {
	console.log(200)
}
proj.calcBudget();


// Parameter decorators
function printInfo(target: any, methodName: string, paramIndex: number) {
	console.log("target: ", target);
	console.log("methodName: ", methodName);
	console.log("paramIndec: ", paramIndex);
}

class Course {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	printStudents(mode: string, @printInfo printAll: boolean) {
		if(printAll) {
			console.log(10000000)
		} else {
			console.log(123)
		}
	}
}

const course = new Course("Super course");
course.printStudents('anything', true)
course.printStudents('anything', false)
