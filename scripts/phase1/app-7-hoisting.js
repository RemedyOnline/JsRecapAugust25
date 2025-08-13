// JS HOISTING...

// The two main things that get hoisted..
// 1. Variable Declarations...
// 2. Function Declarations...

console.log(greeting);
var greeting = "Yo charle!";
console.log(greeting);

greet();
// sayHello();
// shout();

function greet() {
	console.log("Good Morning!");
}

let sayHello = function () {
	console.log("Say Hello");
};

const shout = () => {
	console.log("Heyyyyy!");
};

console.log(title);
var title = "JS Mastery";

display();

function display() {
	console.log("clear pictures");
}

// run();
const run = function () {
	console.log("running");
};

function login(isAdmin) {
	if (isAdmin) {
		var role = "admin";
	}
	console.log(role);
}

login(true);

// QUIZ 1..
console.log(num);
var num = 42;

// QUIZ 2..
// console.log(color);
// let color = "blue";

// QUIZ 3..
sum();
function sum() {
	console.log(2 + 5);
}

// QUIZ 4..
// multiply();
// const multiply = function () {
// 	console.log(3 * 5);
// };

// DEBUGGING 1..
function test() {
	var message = "Hi bro!";
	console.log(message);
}
test();

// CHALLENGE 1..
function mystery() {
	console.log(answer);
	var answer = 5;
}
mystery();

// CHALLENGE 2..
function calc(isRun) {
	if (isRun) {
		var value = "Running";
	}
	console.log(value);
}
calc(true);
calc(false);

// CHALLENGE 3...
saySomething();
function saySomething() {
	console.log("something...");
}
