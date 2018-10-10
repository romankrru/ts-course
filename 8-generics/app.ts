// Simple generic
function echo(data: any) {
	return data;
}

console.log(echo("Max").length)
console.log(echo(27).length)
console.log(echo({name: "Max", age: 27}))

