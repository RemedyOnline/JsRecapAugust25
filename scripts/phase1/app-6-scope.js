// JavaScript Scope (GLOBAL, LOCAL, BLOCK, LEXICAL)

// GLOBAL SCOPE.. accessible everywhere...
let siteName = "Bible Stories & ChiLLs";

function introduceChannel() {
	console.log(`Welcome back to ${siteName} everyone!`);
}
introduceChannel();
console.log(siteName);
if (3 > 2) {
	console.log(siteName);
}

console.log("");
// LOCAL SCOPE / FUNCTION SCOPE.. only accessible within that function...
function greet() {
	let message = "Good morning!";
	return `Hi, ${message}`;
}
console.log(greet());
// console.log(message);

console.log("");
// BLOCK SCOPE... scoped within its parents blocks only.. mainly LET & CONST.
if (true) {
	let yes = "I love you too!";
	var response = "Me more...";
	console.log(yes);
} else {
	let no = "I don't have feelings for you niqqa!";
	var reply = "Me neither bitch!";
	console.log(no);
}
console.log(response);

// ------------------------------------------------
console.log("");
// LEXICAL SCOPE...
let outerName = "Michael";
function outerFxn() {
	let innerName = "Remedy";
	function innerFxn() {
		console.log(outerName);
		console.log(innerName);
	}
	innerFxn();
}
outerFxn();

// ------------------------------------------------
let color = "blue";
function showColor() {
	console.log("The current color is", color);
}

function diffPlace() {
	let color = "red";
	console.log("The current color is", color);
	showColor();
}
diffPlace();

// ------------------------------------------------
let userName = "John";
function createGreeting() {
	return function () {
		return "welcome back, " + userName + "!";
	};
}

function loginSystem() {
	let userName = "hacker";

	let greetingFxn = createGreeting();
	console.log("Local username: " + userName);
	console.log("Greetings say: " + greetingFxn());
}
loginSystem();
// ------------------------------------------------
let animal = "cat";
function outer() {
	let animal = "dog";
	console.log("1. inside outer(), animal is " + animal);

	function inner() {
		console.log("2.. Inside inner(), animal is " + animal);
	}
	return inner;
}
console.log(animal);

function somewhereElse() {
	let animal = "bird";
	console.log("3. Inside SomeWhereElse(), animal is " + animal);

	let innerFuntion = outer();
	console.log("4. Now calling inner function from somewhereElse():");
	innerFuntion();
}
somewhereElse();

// ------------------------------------------------
// CHALLENGE 1. Fix the Scoping Bug...
function createCounter() {
	let count = 0;
	if (true) {
		let count = 5;
	}
	console.log(count);
}
createCounter();

// ------------------------------------------------
// CHALLENGE 2. Scope Chain Debugger...
let level1 = "Global";
function first() {
	let level2 = "first fxn";
	function second() {
		let level3 = "second fxn";
		function third() {
			console.log("From third():");
			console.log(" - level3:", level3);
			console.log(" - level2:", level2);
			console.log(" - level1:", level1);
		}
		return third;
	}
	return second;
}

let secondFxn = first();
let thirdFxn = secondFxn();
thirdFxn();

let food = "Rice";

function kitchen() {
	let food = "Banku";

	function fridge() {
		let drink = "Coke";
		console.log(food);
		console.log(drink);
	}
	fridge();
}
kitchen();

// ------------------------------------------------
// DEBUGGINGS 1...

let lang = "JS";
function codeInLang() {
	console.log(lang);
	if (true) {
		var lang = "Python";
		console.log(lang);
	}
}
codeInLang();

// ------------------------------------------------
// DEBUGGINGS 2...

function outerScope() {
	let secret = "hidden";
	function innerScope() {
		console.log(secret);
	}
	return innerScope;
}
let reveal = outerScope();
secret = "exposed";
reveal();

let value = 5;
function test() {
	value = 10;
}
test();
console.log(value);
