// 4. LOOPS in JavaScript

for (let p = 0, q = 20; p <= 10 && q >= 0; p++, q--) {
	console.log("Book No. ", p, q);
}

let j = 1;
while (j <= 5) {
	console.log("This is the Doing of the LORD!", j);
	j++;
}

let m = 0;
do {
	console.log("I LOVE JavaScript!");
	m++;
} while (m < 5);

// for .... of
const fruits = ["mango", "apple", "pear", "orange", "grapes"];
for (let fruit of fruits) {
	console.log(fruit[0], fruit[1], fruit[2]);
}

// for ... in
const user = {
	name: "Micky",
	age: 20,
	role: "developer",
};

for (let key in user) {
	console.log(`${key} -> ${user[key]}`);
}

for (let m = 1; m <= 10; m++) {
	if (m == 3) continue; // CONTINUE skips current value...
	if (m == 6) continue;
	if (m > 8) break; // BREAK exits/stops loop...
	console.log(m);
}

const scores = [72, 81, 94, 88, 79];
let total = 0;

for (let score of scores) {
	total += score;
}
console.log(total);
const avg = total / scores.length;
console.log("Your average score is...", avg, "%");

// CHALLENGE 1. Print numbers from 10 to 1 using a while loop...
let startingNumber = 10,
	endingNumber = 1;
while (startingNumber >= endingNumber) {
	console.log("current number is", startingNumber);
	startingNumber--;
}

// CHALLENGE 2. Loop through the following names and print only those
// longer than 5 characters...
const names = ["Joe", "Michael", "Sarah", "Luke", "Kimani", "Alexander"];
for (const name of names) {
	const longNames = name.length > 5;
	if (longNames) {
		console.log("using forOf - personalSoln that failed...", name);
	}
}

function checkNameLength(name) {
	if (name.length < 5) {
		console.log(name, "is actually long");
	} else {
		console.log(name, "is actually long");
	}
}
checkNameLength("Am");

// ANALYZING EACH NAME.. #claudeAI
console.log("");
names.forEach((name, index) => {
	console.log(
		`${index + 1}. "${name}" has ${name.length} characters - ${
			name.length > 5 ? "Included" : "out"
		}`
	);
});

console.log("\n" + "=".repeat(40));
for (let n = 0; n < names.length; n++) {
	console.log(
		`Checking index ${n}: "${names[n]} (${names[n].length} characters...)`
	);
	if (names[n].length > 5) {
		console.log(`${names[n]} is longer than 5 x'ters...`);
		console.log(` -> OUTPUT: ${names[n]}`);
	} else {
		console.log(`${names[n]} is short bro...`);
	}
}

console.log("\n" + "=".repeat(40));
for (const yourName of names) {
	if (yourName.length > 5) {
		console.log("using forOf - claudeAI", yourName);
	}
}

console.log("\n" + "=".repeat(40));

names.forEach((name) => {
	if (name.length > 5) {
		console.log("using forEach", name);
	}
});

console.log("\n" + "=".repeat(40));

names
	.filter((name) => name.length > 5)
	.forEach((name) => console.log("using filter + forEach", name));

console.log("\n" + "=".repeat(40));
const result = names.filter((name) => name.length > 5).join(", ");
console.log("result", result);

names.forEach((name) => {
	const length = name.length;
	const passes = length > 5;
	console.log(`"${name}".length = ${length} -> ${length} > 5 = ${passes}`);
});

console.log("\n" + "=".repeat(40));
console.log("CHALLENGE 3...........");

// CHALLENGE 3. Write a function that takes a number N and returns the sum of all even numbers from 1 to n...
function sumEvenNumbers(anyNumber) {
	const evenNumbers = [];
	let total = 0;
	for (let n = 0; n <= anyNumber; n++) {
		if (n % 2 === 0) {
			evenNumbers.push(n);
			console.log(evenNumbers);
		}
	}
	for (let even of evenNumbers) {
		total += even;
	}
	console.log(total);
}

sumEvenNumbers(4);

console.log("\n" + "=".repeat(40));
console.log("CHALLENGE 3...........");

// ✅ Challenge 4: Loop through the alphabet from A to Z. (Hint: use ASCII codes and String.fromCharCode())
// Expected Output: A B C ... Z
//A = 65 (start)
//Z = 90 (end)

let xters = [];
let list = "";
let alphabets;
for (let str = 65; str <= 90; str++) {
	alphabets = String.fromCharCode(str);
	xters.push(alphabets);
	console.log(alphabets);
	list += alphabets + ", ";
}
console.log("list:", list);
console.log("array:", xters);
console.log("joined array:", xters.join(", "));

console.log(" ");

console.log("Getting ASCII codes from characters...");
console.log("'A'.charCodeAt(0) =", "A".charCodeAt(0));
console.log("'B'.charCodeAt(0) =", "B".charCodeAt(0));
console.log("'C'.charCodeAt(0) =", "C".charCodeAt(0));
console.log("'D'.charCodeAt(0) =", "D".charCodeAt(0));
console.log("'Z'.charCodeAt(0) =", "Z".charCodeAt(0));

let str = 65;
console.log("Getting characters from ASCII codes ...");
console.log("String.fromCharCode(str) =", String.fromCharCode(str));
console.log("String.fromCharCode(B) =", String.fromCharCode(str + 1));
console.log("String.fromCharCode(B) =", String.fromCharCode(str + 2));
console.log("String.fromCharCode(B) =", String.fromCharCode(str + 3));
console.log("String.fromCharCode(B) =", String.fromCharCode(str + 25));

let letters = "";
for (let l = 65; l <= 90; l++) {
	const letter = String.fromCharCode(l);
	letters += letter + " ";
	console.log(
		`Step ${
			l - 64
		}: ASCII ${l} -> '${letter}' \n results into "${letters.trim()}"`
	);
}

// CHALLENGE 5: Nested Loop Challenge: Print a multiplication table for numbers 1 to 5...
// 1 x 1 = 1 .... 5 x 5 = 25

let mainNumber, scale, product;
for (mainNumber = 1; mainNumber <= 5; mainNumber++) {
	console.log(`\n-------${mainNumber} TIMES TABLE-------`);
	for (scale = 1; scale <= 12; scale++) {
		product = mainNumber * scale;
		console.log(`${mainNumber} x ${scale} = ${product}`);
	}
}

console.log(" ");

// BUGGY CODE..
let bug1_var = 0;
while (bug1_var < 5) {
	console.log("Number is", bug1_var);
	bug1_var++;
}

console.log(" ");

// BUGGY CODE 2
const bugNums = [10, 20, 30, 40];
for (let i = 0; i < bugNums.length; i++) {
	console.log(bugNums[i]);
}

console.log(" ");

// CHALLENGE 6... REVERSE ARRAY TRAVERSAL

const colors = ["red", "green", "blue", "yellow", "purple"];
for (const color of colors) {
	console.log(color);
}

console.log(" ");

// Challenge 7: Skip Pattern Loop
// Print every 3rd number from 1 to 30 using any loop.

let threes = "";
for (let threeMultiple = 1; threeMultiple <= 30; threeMultiple++) {
	if (threeMultiple % 3 == 0) {
		threes += threeMultiple + ", ";
	}
}
console.log(threes);

console.log(" ");

for (let index = 3; index <= 30; index += 3) {
	console.log("META AI - ", index);
}

function reverseWords(myWord) {
	console.log(
		myWord
			.split(" ")
			.map((word) => word.split("").reverse().join(""))
			.join(" ")
	);
}

reverseWords("Hello World");
