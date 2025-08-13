// Phase 1 - Topic 2: JavaScript Operators

// ARITHMETIC OPERATORS...
let x = 5,
	y = 3;
console.log(x++);
console.log(++y);
console.log(" ");
console.log(x);
console.log(y);

// COMPARISON OPERATORS... always retur a BOOLEAN...
console.log("");

console.log("5" == 5);
console.log("5" === 5);
console.log("5" != 5);
console.log("5" !== 5);
console.log(7 > 3);
console.log(3 <= 2);

// LOGICAL OPERATORS...
console.log("");

console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(!true);
console.log(!false);

let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn && isAdmin) {
	console.log("Login Sucessful!");
} else {
	console.log("Please Subscribe!");
}

// ASSIGNMENT OPERATORS...
let name = "Mike";
console.log(name);
name = "Agyengo";
console.log(name);

let newNum = 3,
	oldNum = 0;
newNum += 9;
oldNum -= 4;
console.log(newNum);
console.log(oldNum);
console.log((newNum /= 12));

console.log((true && false) || true);

console.log(typeof null);
let p = 3;
let q = "3";
console.log(p == q);
console.log(p === q);

console.log(10 % 3);

let age = 19;
let hasLicence = true;

// Challenge 1. Write a ternary that says if the person can drive.
let canDrive = age > 18 && hasLicence ? "Yes Can Drive" : "No! Still a teenage";
console.log(canDrive);

// Challenge 2. Create a function that takes a number as input
// and returns "Even" if the number is even, and "Odd" if not.
function describeNumberType(num) {
	let numType = num % 2 == 0 ? "Number is even" : "Number is odd";
	console.log(numType);
}
describeNumberType(2);

// Challenge 3. Create a function that takes a string and a number.
// If the string length is greater than the number, return "Long string"
// else return "Short string or exact match".
function checkStringLength(str, len) {
	let stringLength = str.length;
	let response =
		stringLength <= len ? "Within Limit, Good!" : "Long String bro!";
	console.log(response);
}
checkStringLength("Revolution", 17);
