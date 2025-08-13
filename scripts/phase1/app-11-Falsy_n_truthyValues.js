// 🧠 11. Falsy vs Truthy Values in JavaScript

// - JS uses TYPE COERCION in Conditional Statements
// - Every value in JS has an inherent boolean value... either TRUTHY / FALSY

// THE SEVEN (7) FALSY VALUES IN JS
// 1. false
// 2. 0
// 3. -0
// 4. 0n
// 5. "" or ''
// 6. null
// 7. undefined
// 8. NaN
// Everything else is truthy.

// TRUTHY EXAMPLES...
// 1. true
// 2. 42
// 3. -9
// 4. "0"
// 5. "Hello"
// 6. " "
// 7. Infinity
// 8. function() {}
// 9. {}
// 10. []

// QUICK TEST - Using the Boolean function to test the
//truthiness of a value
console.log("1. false:", Boolean(false));
console.log("2. 0:", Boolean(0));
console.log("3. -0:", Boolean(0));
console.log("4. 0n:", Boolean(0n));
console.log("5. empty string:", Boolean(""));
console.log("6. null:", Boolean(null));
console.log("7. undefined:", Boolean(undefined));
console.log("8. NaN:", Boolean(NaN));
console.log("");
console.log("");

console.log("1. true:", Boolean(true));
console.log("2. 42:", Boolean(42));
console.log("3. -9:", Boolean(-9));
console.log("4. '0':", Boolean("0"));
console.log("5. 'Hello':", Boolean("Hello"));
console.log("6. ' ':", Boolean(" "));
console.log("7. Infinity:", Boolean(Infinity));
console.log(
	"8. function() {}:",
	Boolean(function () {})
);
console.log("9. {}:", Boolean({}));
console.log("10. []:", Boolean([]));
console.log("11. 12n:", Boolean(12n));

console.log("");
console.log("");

// Real Life Examples...
// 1. CONDITIONAL RENDERING
const userName = "";
if (userName) {
	console.log("Welcome,", userName);
} else {
	console.log("Please login");
}

// 2. DEFAULT VALUE WITH LOGICAL OR (||)
const name = userName || "Guest";
if (name) {
	console.log("Welcome,", name);
} else {
	console.log("Please login");
}

// 3. DEFENSIVE PROGRAMMING...
function printMsg(msg) {
	if (!msg) {
		console.log("No message provided bro!");
		return;
	}
	console.log("Your message was:", msg);
}

printMsg("I love JS!");

// FOR DEBUGGING TOO..
const yourValue = []; // tried for all the other types though✅
console.log(typeof yourValue, Boolean(yourValue));

// 🧠 QUIZ TIME
// Which of these are truthy or falsy?

// 0 FALSE
// "false" - TRUTHY
// null - FALSY
// [] - TRUTHY
// {} - TRUTH
// NaN = FALSY
// -0 - FALSY
// " " - TRUTHY
// undefined - FALSY
// function() {} - TRUTHY

// CHALLENGE 1 - Write a function that returns TRUTHY / FALSY based on the value passed...
let count = 0;
function isTruthy(val) {
	count++;
	if (Boolean(val) === true) {
		console.log(`${count}. ${val} is TRUTHY bro!`);
	} else {
		console.log(`${count}. ${val} is FALSY...`);
	}
}
isTruthy("");
isTruthy([]);
isTruthy(12);
isTruthy(true);
isTruthy(false);
isTruthy(Infinity);
isTruthy(undefined);
isTruthy(0);

console.log("");
console.log("");
// CHALLENGE 2 - Write a function that checks whether an obj has any prop. if the object is empty, return "Empty Object"; otherwise, return "Has properties"
function objChecker(obj) {
	let objKeys = Object.keys(obj);
	if (objKeys.length === 0) {
		return "Empty Object...";
	} else {
		return "Object has props bro!";
	}
}
console.log(objChecker({ name: "Mike" }));
console.log(objChecker({}));

// alternative solution...
function objChecker2(obj) {
	return Object.keys(obj).length ? "Has Props.." : "Empty Obj";
}
console.log(objChecker2({ age: 21 }));

// CHALLENGE 3 - Given an array of mixed values.. filter and return only the truthy values...
const arr = [0, "hello", "", null, " ", false, {}, []];
console.log(arr);

const filteredArr = arr.filter((item) => Boolean(item));
console.log("filtered:", filteredArr);

const filteredArr2 = arr.filter(Boolean);
console.log("2.", filteredArr2);

const filteredArr3 = arr.filter((item) => !!item);
console.log("3.", filteredArr3);
