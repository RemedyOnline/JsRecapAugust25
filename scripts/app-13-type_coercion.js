// 🧠 13. Type Coercion in JavaScript

// Type Coercion is JS' way of automatically onverting one data type to another..
// when performing operations or comparisons...

// there are TWO TYPES...
// 1. Implicit Coercion - JS does it automatically for us...
console.log("4" * 3);

// 2. Explicit Coercion - we do it intentionally when we need to...
console.log(Number("6") / 2);
console.log("");
console.log("");

// IMPLICIT COERCION...
console.log(null + 1);
console.log(true + 12);
console.log(false - 3);
console.log([] == "");
console.log([] == 0);
console.log([1] == 1);
console.log(["1"] == "1");
console.log("hello" + 2);
console.log("hello" + true);
console.log([1, 2] + 3);
console.log({ kofi: "Kofi" } + 3);

// EXPLICIT COERCIONS...
console.log(Number("32"));
console.log(Number("boy"));
console.log(Number(""));
console.log(Number("   35 "));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));
console.log("");

console.log(String(43));
console.log(String(true));
console.log(String(null));
console.log(String(1, 2, 3));
console.log(String([1, 2, 3]));
const numbers = [2, 4, 6];
console.log(numbers.map(String));
0;
console.log("");

console.log(Boolean(0));
console.log(Boolean("Hello"));
console.log(Boolean(""));
console.log(Boolean(1));
console.log(Boolean(-3));
console.log(Boolean([]));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean({}));
0;
console.log(!!{});
console.log(!!"hi");
0;
console.log(!!0);

// REAL-WORLD SCENARIO
// const input = prompt("Enter a number");
// if (Number(input) === 0) {
// 	alert("you entered zero ong???");
// } else {
// 	alert("May the Lord be with you!");
// }

// DANGEROUS IMPLICIT COERCIONS..
console.log([] + {});
console.log({} + []);
console.log("3px" - 2);
console.log("3" - 2);

// QUIZ TIME..
console.log("'5' + 1;", "5" + 1);
console.log("'5' - 1;", "5" - 1);
console.log("true + true;", true + true);
console.log("false + 'test';", false + "test");
console.log("null + 1;", null + 1);
console.log("undefined + 1;", undefined + 1);
console.log("Number('');", Number(""));
console.log("Boolean([]);", Boolean([]));
console.log("'5' == 5;", "5" == 5);
console.log("'5' === 5;", "5" === 5);

// CHALLENGES... - Guess the Output..
console.log([]);

console.log("1. [] + 1:", [] + 1);
console.log("2. [1] + 1:", [1] + 1);
console.log("3. [1, 2] == '1,2':", [1, 2] == "1,2");
console.log("4. null == 0:", null == 0);
console.log("5. null >= 0:", null >= 0);
console.log("5. null <= 0:", null <= 0);
console.log("5. null <= 0:", null <= 0);

// CHALLENGE 2: Write a function safeAdd(a,b) that:
// - converts both a and b to numbers first...
// - then returns the sum
// - if either is NaN, return "Invalid input"

function safeAdd(a, b) {
	if (typeof a == Number || typeof b == Number) {
		return "invalid input";
	} else {
		const numberedA = Number(a);
		const numberedB = Number(b);
		return numberedA + numberedB;
	}
}
console.log(safeAdd("18", 12));
console.log(safeAdd("5", 10));
console.log(safeAdd("abc", 3));

console.log(isNaN(3));
console.log(isNaN("kdof"));
console.log(isNaN(NaN));

let val = null;
console.log(typeof val, val, Number(val), Boolean(val), String(val));
val = undefined;
console.log(typeof val, val, Number(val), Boolean(val), String(val));

age = 15;
const message = age >= 18 ? "Adult" : "Youth";
console.log(message);

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(0, 4));

const newArr = [1, 2, 3, 4, 5];
console.log(newArr.splice(2, 2)); // start @[2], delete 2 items
