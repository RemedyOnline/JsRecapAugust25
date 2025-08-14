// MY PERSONAL RECAP NOTES...

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
		// setTimeout(() => {
		// 	console.log("var index: ", i);
		// }, 10);
	}

	console.log("looping with LET (blockScoped)");
	for (let j = 0; j <= 3; j++) {
		console.log("let number: ", j);
		// setTimeout(() => {
		// console.log("let index: ", j);
		// }, 20);
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

// OPERATORS IN JS
// 1. Arithmetic Operators
console.log("");
console.log(" JS OPERATORS - Arithmetic");

let a = 10,
	b = 3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7  (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1  (Modulus - remainder)
console.log(a ** b); // 1000 (Exponentiation)

// Increment/Decrement
console.log(++a); // 11 (Pre-increment)
console.log(a++); // 11 (Post-increment, then a becomes 12)
console.log(--b); // 2  (Pre-decrement)
console.log(b--); // 2  (Post-decrement, then b becomes 1)
console.log(a);
console.log(b);

console.log("");
console.log(" JS OPERATORS - Arithmetic");
console.log(" JS OPERATORS - Arithmetic");
console.log(" JS OPERATORS - Arithmetic");

let p = 5;
let q = 3;
console.log(p & q);
console.log(p | q);
console.log(p ^ q);
console.log(~p);
console.log(p << 1);
console.log(p >> 1);

let arr = [1, 2, 3];
let obj = { title: "developer" };

console.log(typeof arr);
console.log(arr instanceof Object);
console.log(arr instanceof Array);
console.log(obj instanceof Object);
console.log(obj instanceof Array);

let myAge = 15;
let classs = myAge >= 18 ? "adult" : "teenager";
console.log(classs);

let myScore = 66;
let grade =
	myScore >= 80
		? "A"
		: myScore >= 75
		? "B+"
		: myScore >= 70
		? "B"
		: myScore >= 65
		? "C+"
		: myScore >= 60
		? "C"
		: myScore >= 55
		? "D+"
		: "D";

console.log(grade);

let user = null;
let defaultName = "Guest";

console.log(user ?? defaultName);
console.log("Mike" ?? defaultName);
user = "kofi";
console.log(user ?? defaultName);
console.log(undefined ?? defaultName);
console.log(user ?? defaultName);
console.log("" ?? defaultName);

let newUser = {
	name: "Ama",
	address: {
		street: "Lapaz",
	},
};

console.log(newUser);
console.log(newUser.boy);
console.log(newUser?.boy);
console.log(newUser?.name);
console.log(newUser?.address);
console.log(newUser?.address?.street);

let arr1 = [2, 4, 6, 8];
let arr2 = [1, 3, 5, 7];
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { m: 4, n: 5, p: 6 };
let combinedArr = [...arr1, ...arr2];
let combinedObj = { ...obj1, ...obj2 };

console.log(combinedArr);
console.log(combinedObj);

let nullVar = null;
console.log(typeof nullVar);
console.log(nullVar === null);

const sum = (digit1 = 2, digit2 = 3) => {
	return digit1 + digit2;
};

console.log(sum());

const diff = ({ num1 = 4, num2 = 7 } = {}) => num2 - num1;
console.log(diff({ num1: 2 }));

// IIFE...
(function () {
	console.log("I run immediately bro..!");
})();

(function () {
	console.log("I also run immediately charle..!!!!!!");
})();

(function (name, address) {
	console.log(`Hi ${name}, I live @${address} too...`);
})("John", "Lapaz");

(() => {
	console.log("Arrow IIFE!");
})();

((m, n) => {
	console.log(`Age = ${m + n}`);
})(10, 8);

// INTERVIEW
