function logged(constructorFn: Function) {
	console.log(constructorFn);
}

@logged
class Person {

}
