// 🧠 12. Equality in JavaScript: == vs ===

// == Loose Equality - checks values only - coerces
// === Strict Equality - checks value & type - does not coerce

// LOOSE EQUALITY
// COMPARES two values.. but CONVERTS TYPES if they're different.
// thus.. type coercion happens behind the scenes..
console.log(5 == "5");
console.log(null == undefined);
console.log(0 == false);
console.log("0" == false);
console.log(typeof null);
console.log(typeof undefined);
console.log("");
console.log("");

// STRICT EQUALITIY
// COMPARES value and type...
// NO coercion. if types are different, returns FALSE.
console.log(5 === "5");
console.log(null === undefined);
console.log(0 === false);
console.log("0" === false);
console.log("0" === "0");
console.log(5 === 5);
console.log("");
console.log("");

// The WEIRD SIDE..
console.log([] == false);
console.log("" == 0);

// REAL-LIFE SCENARIO
const age = 18;
if (age === 18) {
	console.log("You can vote niqqa!");
} else {
	console.log("Type mismatch bro - fix your input!");
}

console.log("'5' == 5:", "5" == 5);
console.log("'5' === 5:", "5" === 5);
console.log("false == 0:", false == 0);
console.log("false === 0:", false === 0);
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);
console.log("[] == '':", [] == "");
// console.log("[] === '':", [] === '');
console.log("[1] == '1':", [1] == "1");
console.log("{} == {}:", {} == {});
// console.log("{} === {}:", {} === {});
console.log("[] == []:", [] == []);
// console.log("[] === []:", [] === []);
console.log("");
console.log("");

console.log(false == 0);
console.log([] == "");
console.log([1] == "1");
console.log([1, 2] == "1,2");
console.log("");
console.log("");

// CHALLENGE 1 - Write a function areEqual(a, b) that returns...
//-"Strictly Equal" if a === b
//-"Loosely Equal" if a == b
//-"Not Equal" if neither

function areEqual(a, b) {
	return a === b ? "Strictly Equal" : a == b ? "Loosely Equal" : "Not Equal";
}
console.log(areEqual(4, "4"));
console.log(areEqual(4, 4));
console.log(areEqual(4, null));

// CHALLENGE 2 - You have an array of user inputs...
// filter out values that are loosely equal to false.
const inputs = [0, "0", false, null, undefined, "", "hello", true, -1];
const filteredInputs = inputs.filter((item) => item == false);
console.log(filteredInputs);

console.log(null == undefined, undefined == null);
