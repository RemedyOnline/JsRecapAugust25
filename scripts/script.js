// JS OBJECTS...

function laptop(brand, year, size) {
	this.brand = brand;
	this.year = year;
	this.size = size;
}

const myLaptop = new laptop();
myLaptop.brand = "hp";
(myLaptop.year = 2018), (myLaptop.size = 128);

console.log(myLaptop);

const yourLaptop = new laptop();
console.log(yourLaptop);

myLaptop.size += 64;
console.log(myLaptop);
console.log(myLaptop["brand"]);

console.log("year" in myLaptop);
console.log("sie" in myLaptop);
console.log(myLaptop.hasOwnProperty("brand"));

// OBJECT ITERATION TECHNIQUES...
for (let element in myLaptop) {
	console.log(element + " " + myLaptop[element]);
}

const myArray = [];
console.log(myArray);

myArray.push("JS");
myArray.push(2);
myArray.push("2nd");
myArray.push(true);
myArray.push({ name: "Mike", age: 12 });
myArray.push(9);
myArray.push("recap...");
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.shift();
console.log(myArray);

myArray.unshift(1);
console.log(myArray);

const myFxn = function () {
	console.log("Function as a variable...");
};
myFxn();

const myArrowFxn = () => {
	console.log("Arrow fxns are fashionable...");
};
myArrowFxn();

const afterReturn = () => {
	let num = 4;
	console.log(num);
	console.log((num += 1));
	return num;
};

afterReturn();

const nickyyy = "Remedy";
console.log(typeof nickyyy);

// THE SEVEN (7) PRIMITIVE DATA TYPES...
console.log("1. string");
console.log("2. number");
console.log("3. boolean");
console.log("4. undefined");
console.log("5. null");
console.log("6. void");
console.log("7. bigint");

let sym = Symbol("id");
console.log(sym);

let big = 12345678n;

console.log(typeof big);

// Example 1: Block scope vs Function scope
const blockScopedFxn = () => {
	console.log("Inside block Scope Fxn");
	{
		let var1 = "not accessible...";
		var var2 = "accessible...";
		console.log("inside fxn block... LET is ", var1);
		console.log("inside fxn block... VAR is", var2);
	}
	// console.log("inside fxn block...", var1);
	console.log("inside fxn block... VAR is", var2);
};
blockScopedFxn();
console.log("#OUTSIDE BLOCK NOW...");

// Example 2: Block scope vs Function scope
function lexicalScoping() {
	console.log("");
	console.log("INSIDE FUNCTION");

	if (true) {
		let blockScoped = "I'm block-scoped with LET";
		var funcitonScoped = "I'm function-scoped with VAR";

		console.log("inside if block... ", blockScoped);
		console.log("inside if block... ", funcitonScoped);
	}

	// console.log("outside if block... ", blockScoped);
	console.log("outside if block... ", funcitonScoped);
	console.log("");
}
lexicalScoping(false);

// Example 2: Hoisting Demonstration...
function hoistingExample() {
	console.log("");
	console.log("Inside Hoisting Function");

	console.log("before declaration... hoistedVAR", varHoisted);
	// console.log("before declaration... hoistedLET", letHoisted);

	if (true) {
		var varHoisted = "I'm hoisted to fxn scope...";
		let letHoisted = "I'm not accessible before declaration";
		console.log("after declaration... ", letHoisted);
	}

	console.log("after declaration... ", varHoisted);
}
hoistingExample();

// Example 3: The Classic VAR loop problem..
function loopExample() {
	console.log("");
	console.log("Inside Loop");

	console.log("looping with VAR (fxnScoped)");
	for (var i = 0; i <= 3; i++) {
		console.log("var number: ", i);
		setTimeout(() => {
			console.log("var index: ", i);
		}, 10);
	}

	console.log("looping with LET (blockScoped)");
	for (let j = 0; j <= 3; j++) {
		console.log("let number: ", j);
		setTimeout(() => {
			console.log("let index: ", j);
		}, 20);
	}
}

loopExample();

console.log("---------------");
console.log("one!");
console.log("line 2");
function num3() {
	console.log("number 3");
}
function fourth() {
	num3();
	console.log("4");
}
fourth();
