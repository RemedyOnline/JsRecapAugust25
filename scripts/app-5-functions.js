// JS FUNCTIONS...

greet("Kwaku");
console.log(sum(11, 22));

function greet(user) {
	console.log("Hi,", user);
}
greet("Ama");
// birthdayWish("Yaa");

const birthdayWish = function (user) {
	console.log("Happy Birthday to you,", user);
};
birthdayWish("Kwame");
// favoriteFood("Banku");

const favoriteFood = (myFavorite) => myFavorite;
console.log(favoriteFood("Rice"));
console.log(favoriteFood("Banku"));

const firstLove = (nameOfLover) =>
	console.log("My first love is/was", nameOfLover);
firstLove("Becky");

console.log("");
console.log("-------FUNCTION TYPES-------");
console.log(
	"1. Function Declaration - Thus, the normal type of functions... HOISTED"
);
console.log(
	"2. Function Expression - NOT HOISTED, Fxn assigned to a variable."
);
console.log("3. Arrow Functions - shorter function forms. NOT HOISTED");

//  PARAMETERS & ARGUMENTS...
function sum(a, b) {
	// parameters
	return a + b;
}
console.log("Sum =", sum(3, 4)); // arguments///

function greet(name = "Kofi") {
	return `Hi, ${name}`;
}
console.log(greet("Alex"));

function divide(d, p) {
	if (p === 0) {
		console.log("You cannot divide by 0!");
		return;
	}
	return d / p;
}
console.log(divide(10, 0));

const getName = (name) => `My name is ${name}`;
console.log(getName("Ike"));

const getNamee = (name) => `My name is ${name}`;
console.log(getName("David"));

// CHALLENGE 1 - Write a function that converts Celsius to Fahrenheit...
// Formula: F = C * 1.8 + 32...
function tempConvertor(unit, value) {
	let unitScale = unit.toLowerCase(),
		newValue;
	if (unitScale == "c") {
		newValue = value * 1.8 + 32;
		return `Your temperature in Fahrenheit is ${newValue}`;
	} else if (unitScale == "f") {
		newValue = value / 1.8 - 32;
		return `Your temperature in Celsius is ${newValue}`;
	} else {
		return `Invalid Unit... Unit should be either "F" or "C".`;
	}
}
console.log(tempConvertor("c", 23));

function wordCounter(str) {
	// return str
	// 	.trim()
	// 	.split(/\s+/)
	// 	.filter((word) => word.length > 0).length;
	if (str.trim() === "") return 0;
	return str.trim().split(/\s+/).length;
}
console.log(
	wordCounter(
		"    Hello World bro!   I love God merhhnnnn. August 3rd Again bro!"
	)
);
console.log(wordCounter(""));

// A FUNCTION THAT RETURN THE NUMBERS IN A STRING...
// function returnNumbers(str) {
// 	return str.trim().split(/\d/);
// }
// console.log(returnNumbers("Hello1 I4453 am goin3"));
