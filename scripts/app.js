// CHATGPT RECAP NOTES...

// 1. VARIABLES & DATA TYPES
function variables() {
	if (true) {
		var x = 10;
		let y = 20;
		const z = 30;
		console.log("inside function", y); // ❌ ReferenceError
		console.log("inside function", z); // ❌ ReferenceError
	}
	console.log("inside function", x); // ✅ 10
}
// console.log("outside function", x); // ✅ 10
// console.log("outside function", y); // ❌ ReferenceError
// console.log("outside function", z); // ❌ ReferenceError

variables();

let sym = Symbol();
console.log(typeof sym);

function greet() {}
console.log(typeof greet);

let myMoney = 1n;
console.log(typeof myMoney);

console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

let num1 = "32";
let num2 = 32;
let truth = num1 == num2;
let realTruth = num1 === num2;
console.log(typeof num1);
console.log(typeof num2);
console.log(truth);
console.log(realTruth);

const person = {
	name: "Becky",
};
person.name = "Remedy";
console.log(person.name);

if (true) {
	var test = "Hello...";
	var test = "Hi...";
}
let secondTest = "Hello...";
console.log(test);
console.log(secondTest);

person.age = 12;
console.log(person);

delete person.age;
console.log(person);
console.log("name" in person);
console.log("toString" in person);

console.log(" ");

const firstArr = [1, 2, 3, 4];
delete firstArr[2];
console.log(firstArr);
firstArr[2] = "Hi";
console.log(firstArr);
console.log(0 in firstArr);
console.log(1 in firstArr);
delete firstArr[2];
console.log(2 in firstArr);
console.log(firstArr);
console.log(3 in firstArr);
console.log(4 in firstArr);

console.log(" ");

console.log(void 12);

console.log(" ");

const date = Date();
console.log(date);

const arr = new Array(5);
console.log(arr);
arr.push("No.1");
console.log(arr);

const arrr = new Array();
console.log(arrr);
arrr.push("No.1");
console.log(arrr);

console.log(" ");

console.log(typeof 322);
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log({} instanceof Object);
console.log({} instanceof Array);

console.log(" ");

let a, b, c;
c = ((a = 1), (b = 2), a + b);
console.log(a);
console.log(b);
console.log(c);

console.log(" ");

for (let i = 0, j = 10; i <= j; i++, j--) {
	console.log(i, j);
}

console.log(" ");

let user = null;
console.log(user);
console.log(user ?? "New User");

console.log(" ");

console.log(/regex/ instanceof RegExp);
console.log(/regex/ instanceof Object);
console.log(new Date() instanceof Date);
console.log(new Date() instanceof Object);

console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
