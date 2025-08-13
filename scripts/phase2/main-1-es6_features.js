// 1. ES6+ Features (2015)

// i. let & const
// ii. destructuring
// iii. spread & rest operator
// iv. template literals

// Temporal Dead Zone...
console.log(a);
var a = 62;

// console.log(b);
let b = "Hello";

// console.log(c);
const c = false;
// c = b;

// REAL-LIFE SCENARIO - tracking score in a game...
let score = 0;
const maxScore = 100;

score += 20;
console.log(score);

// DESTRUCTURING...
// Allows you to unpack values from arrays or objects into variables...
// this is a cleaner alternative to manual assignment...

// ARRAY DESTRUCTURING...
console.log("");
const rgb = [223, 179, 42];

// old way..
let red = rgb[0],
	green = rgb[1],
	blue = rgb[2];
console.log(rgb);
console.log(red);
console.log(green);
console.log(blue);

// es6 way
let [redColor, greenColor, blueColor, noColor] = rgb;
console.log("redColor:", redColor);
console.log("greenColor:", greenColor);
console.log("blueColor:", blueColor);
console.log("noColor:", noColor);
console.log("");
function printArrValues(arr) {
	let count = 1;
	for (const color of rgb) {
		console.log(`${count}. ${color}`);
		count++;
	}
}
printArrValues(rgb);

// OBJECT DESTRUCTURING...
const myDetails = {
	name: "Mike",
	age: 12,
	isMarried: false,
	networth: 999n,
	noOfKids: null,
	gfName: undefined,
};
console.log(myDetails);

for (const key in myDetails) {
	console.log(`${key}: ${myDetails[key]}`);
}

let { name, age, isMarried, others = "etc..." } = myDetails;
console.log(name, age, isMarried, others);
console.log("");

// DEFAULT VALUES...
const [x = 3, y = 2] = [null, false];
console.log("X:", x);
console.log("Y:", y);
console.log("");

// Renaming Variables in Object Destructuring...
console.log(myDetails);
let { name: firstName, age: yearsLived, ...other } = myDetails;
console.log("FirstName:", firstName);
console.log("yearsLived:", yearsLived);
console.log("others:", others);
console.log(name);

// Nested Destructuring...
const user = {
	id: 1,
	profile: Object.assign(myDetails),
};
user.profile.address = {
	box: 42,
	city: "Accra",
	country: "GH",
};
console.log(user);

let {
	id,
	profile: {
		name: featuredName,
		age: mfie,
		networth,
		address: { city },
	},
} = user;
console.log(featuredName, mfie, networth, city);

// rest pattern..
const [first, second, ...remainings] = [1, 2, 3, 4, 5];
console.log(first, second, remainings);

const { id: index, ...otherDetails } = user;
console.log(index, otherDetails);

// Function Parameters for destructuring...
// instead of...
function greet(user) {
	console.log(
		`Hi ${user.profile.name}, I also live in ${user.profile.address.city} too!`
	);
}
greet(user);

// you can simply do...
function salut({
	profile: { name },
	id,
	profile: {
		address: { country },
	},
}) {
	console.log(`User with ID: ${id}, named ${name} comes from ${country}`);
}
salut(user);

// SWAPPING VARIABLES...
let valA = 2,
	valB = 3;
[valA, valB] = [valB, valA]; // this
console.log(valA, valB);
console.log("");

// SPREAD & REST OPERATORS...
// SPREAD OPERATOR...
// it expands elements of an Array / Object...
const nums = [2, 4, 6, 8, 10];
const newNums = [...nums, 1, 3, 5, 7, 9];
console.log("Nums:", nums);
console.log("newNums:", newNums);
console.log(
	"newNums:",
	newNums.sort((a, b) => b - a)
);
console.log("");

console.log(user);
const updatedUser = { ...user, id: 2 };
console.log(updatedUser);
console.log("");

// REST OPERATOR...
// it collects multiple elements into one Array / Object...

function sum(digits) {
	return digits.reduce((acc, val) => (acc += val));
}
console.log(newNums);
console.log(sum(newNums));

// Spread with function calls...
console.log("");
console.log(nums);
console.log(Math.min(nums));
console.log(Math.min(...nums));

// NB: order SPREAD ORDER matters...
const product = {
	item: "phone",
	brand: "iphone",
	model: "14 Pro",
	storage: 64,
};
const updatedProduct1 = { ...product, storage: 128 };
const updatedProduct2 = { model: "16 Pro Max", ...product };
console.log("updatedProduct1:", updatedProduct1);
console.log("updatedProduct2:", updatedProduct2);

// SHALLOW COPY WARNING...
const original = {
	name: "Remedy",
	hobbies: ["coding", "podcasts", "politics"],
};
const copy = { ...original };
copy.hobbies.push("gaming");
console.log("original:", original);
console.log("copy:", copy);

// Converting NodeList/String to Array
const myName = [..."Michael"];
console.log(myName);
console.log(myName[0] + myName[1].toUpperCase() + myName[2].toUpperCase());

// Combining Arrays / Objects...
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log("Merged Array Elements", ...arr1, ...arr2);
console.log(
	"Merged Array",
	[...arr1, ...arr2].sort((a, b) => b - a)
);

const obj1 = { a: 1, b: 3 };
const obj2 = { c: 2, d: 4 };
console.log({ ...obj1, ...obj2 });

// TEMPLATE LITERALS...
// this let's you embed variables and expressions into strings using BACKTICKS (`)
let firstGfName = "Aba Yaa";
let avgScore = 93;
console.log(
	`- ${firstGfName} maintained an average mark of ${avgScore} throughtout basic score`
);
console.log(`3 + 2 = ${3 + 2}`);
let poem = `
Roses are Red,
Voilets are Blue,
JS is now sweet,
but the struggle is still real`;
console.log(poem);
console.log("");

// QUIZ...
const mainColors = [red, green, blue];
const [firstColor, , , lastColor] = mainColors;
console.log(red, green, blue);
console.log(firstColor, lastColor);

// const marks;
// marks = 10

// CHALLENGE 1. Write a function multiplyAll that multiplies all given numbers...
console.log("");
function multiplyAll(...numbersGiven) {
	if (numbersGiven.length === 0) return 1;
	return numbersGiven.reduce((acc, num) => (acc *= num));
}
console.log(multiplyAll(1, 2, 3));

function multiplyAllWithForLoop(...numbersGiven) {
	if (numbersGiven.length === 0) return 1;
	let result = 1;
	for (const number of numbersGiven) {
		result *= number;
	}
	return result;
}
console.log(multiplyAllWithForLoop(1, 2, 3));
console.log(multiplyAllWithForLoop());

// CHALLENGE 2. merge two objects into one..
console.log("");

let person = { name: "Kofi", city: "B-town" };
let job = { role: "frontend dev" };
let someone = { ...person, ...job };
console.log(someone);
