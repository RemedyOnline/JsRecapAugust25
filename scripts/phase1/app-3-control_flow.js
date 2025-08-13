//  3. Control Flow in JavaScript

// IF, ELSE IF & ELSE...
let temp = 25;
if (temp >= 32) {
	console.log("The weather is very hot bro!");
} else if (temp >= 21) {
	console.log("Normal vibes...");
} else {
	console.log("Weather no ay3 d3!");
}

// SWITCH STATEMENTS...
let birth_day = "FRIDAY".toLowerCase();

switch (birth_day) {
	case "monday":
		console.log("You are a Kwadwo/Adwoa");
		break;
	case "tuesday":
		console.log("You are a Kwabena/Abena");
		break;
	case "wednesday":
		console.log("You are a Kwaku/Akua");
		break;
	case "thursday":
		console.log("You are a Yaw/Yaa");
		break;
	case "friday":
		console.log("You are a Kofi/Afia");
		break;
	case "saturday":
		console.log("You are a Kwame/Ama");
		break;
	case "sunday":
		console.log("You are a Kwasi/Akosua");
		break;

	default:
		console.log("You are a Chimpanzee bro!😅");

		break;
}

let timeOfTheDay = "Day";
switch (timeOfTheDay) {
	case "night":
		console.log("Goodnight love");
	// break;
	case "day":
		console.log("Good day bro");
		break;
	default:
		console.log("You outta this world bro!");
		break;
}

let isMarried = "false";
switch (isMarried) {
	case true:
		console.log("Yes, married niqqa!");
		break;
	case false:
		console.log("Single & Searching...");
		break;
	default:
		console.log("Still a youngster");
		break;
}

// TERNARY OPERATOR...
let yourAge = 13;
if (yourAge < 13) {
	console.log("Primary Student");
} else if (yourAge <= 16) {
	console.log("Junior High Student");
} else if (yourAge <= 20) {
	console.log("Senior High Student");
} else {
	console.log("You be kob)l) ongg????");
}

function solution(inputStr) {
	let results = inputStr.replace(/[aeiouAEIOU]/g, "");
	console.log(results);
	return results;
}
solution("Hello");

let loggedIn = false;
let intro = loggedIn == true ? "Welcome back bro!" : "Please Sign In...";
console.log(intro);

// CHALLENGE 1. Write a function that returns grade based on marks, with both if-else and switch...
// Using If-else...
let score = 67;
if (score >= 90) {
	console.log("You had an 'A' bro!");
} else if (score >= 80) {
	console.log("You had a 'B' bro!");
} else if (score >= 70) {
	console.log("You had a 'C' bro!");
} else if (score >= 60) {
	console.log("You had a 'D' bro!");
} else {
	console.log("You had an 'F' bro!");
}

switch (true) {
	case score > 90:
		console.log("You had an 'A' bro!");
		break;
	case score > 80:
		console.log("You had a 'B' bro!");
		break;
	case score > 70:
		console.log("You had a 'C' bro!");
		break;
	case score > 60:
		console.log("You had a 'D' bro!");
		break;
	default:
		console.log("You had an 'F' bro!");
		break;
}

let isStudent = true;
let price = 89;

if (isStudent) {
	if (price > 80) {
		console.log("no lyyy");
	}
	console.log("done and dosted");
}

let mood = "happy";
if (mood === "happy") {
	console.log("happyyyyyyyyyy");
}

// Challenge 2. Write a program that checks if a number is Positive, Negative or Zero...
function checkNumberPolarity(numValue) {
	let result =
		numValue == 0
			? "Number is zero"
			: numValue > 0
			? "Number is Positive"
			: "Number is Negative";
	console.log(result);
}
checkNumberPolarity(11);

// challenge 3. Use ternary to re
