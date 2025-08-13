// ARRAY & STRING METHODS...
// map | filter | reduce | slice | splice | find | some | every  | split | join...

// .map() method... - transforms each item in an array...
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((number) => {
	return number * number;
});
console.log(squared);

const users = [
	{
		name: "Mike",
		age: 22,
	},
	{
		name: "Kate",
		age: 18,
	},
	{
		name: "Kofi",
		age: 20,
	},
	{
		name: "ama",
		age: 13,
	},
];
const usernames = users.map((user) => user.name.toUpperCase());
console.log(usernames);
console.log("");

// .filter() method... returns only items that pass a test / truthy...
const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = digits.filter((digit) => digit % 2 === 0);
console.log(even);
const odd = digits.filter((digit) => digit % 2 !== 0);
console.log(odd);

const products = [
	{ id: 1, name: "laptop", inStock: true },
	{ id: 2, name: "smartphone", inStock: false },
	{ id: 3, name: "wireless headphones", inStock: true },
	{ id: 4, name: "tablet", inStock: true },
	{ id: 5, name: "gaming console", inStock: false },
	{ id: 6, name: "smartwatch", inStock: true },
	{ id: 7, name: "bluetooth speaker", inStock: false },
	{ id: 8, name: "webcam", inStock: true },
	{ id: 9, name: "external hard drive", inStock: true },
	{ id: 10, name: "wireless mouse", inStock: false },
	{ id: 11, name: "mechanical keyboard", inStock: true },
	{ id: 12, name: "monitor", inStock: false },
	{ id: 13, name: "USB-C cable", inStock: true },
];
console.log(products);
const availableGoods = products.filter((product) => {
	return product.inStock == true;
});
console.log(availableGoods);

const outOfStockGood = products.filter((product) => {
	return product.inStock == false;
});
console.log(outOfStockGood);
console.log("");

// .reduce() method... used to evaluate an array to a single value...
// Eg. Total sum, average, group items, etc...
// const nums = [10, 20, 30];
const nums = [12, 32, 26, 19, 23, 27, 30, 28];
const total = nums.reduce((acc, cur) => (acc += cur), 0);
console.log(total);

const nums2 = [10, 20, 30];
const total2 = nums2.reduce((acc, cur) => acc + cur, 0);
console.log(total2);

const votes = ["yes", "yes", "no", "yes", "no"];
const results = votes.reduce((acc, vote) => {
	acc[vote] = (acc[vote] || 0) + 1;
	return acc;
}, {});
console.log(results);
const obj = { yes: 3, no: 2 };
console.log(obj);
console.log(votes);
console.log("");

// .slice() method.. returns a shallow copy from one start to a specified end...
//   index - 0  1  2  3  4  5
//           |  |  |  |  |  |
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(0, 1));
console.log(arr.slice(0, 2));
console.log(arr.slice(1, 3));
console.log(arr);

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log(fruits.slice(1, 3));
console.log(fruits.slice(2));
console.log("Getting all fruits:", fruits);
console.log("Getting empty slice:", fruits.slice());
console.log("Getting last item:", fruits.slice(-1));
console.log("Getting last 2 items:", fruits.slice(-2));

const text = "JavaScript";
console.log(text.slice(0, 4));
console.log(text.slice(4));
console.log(text.slice(-6));
console.log(text.slice(-6, -2));
console.log("");

// .splice() method...
const newArr = [1, 2, 3, 4, 5];
newArr.splice(2, 2); // start @[2], delete 2 items
console.log(newArr);
newArr.splice(2, 1, 33, 44, 55); // start @[2], replace and add more items...
console.log(newArr);
newArr.splice(0, 0, 0); // adding an item at the start of it...
console.log(newArr);
newArr.splice(-1, 1); // removing the last item using negative indexing...
console.log(newArr);
console.log(newArr.splice(2));
console.log(newArr); // removing everything starting from index 2
newArr.splice(0, 0, "boy o boyyy"); // inserting at the beginning...
console.log(newArr);
console.log("");

// .find() method... returns the first element that matches a condition
console.log(products);
const fav = products.find((product) => product.name.toUpperCase() == "TABLET");
console.log(fav);
console.log(products.find((prod) => prod.id === 7));
console.log(products.find((prod) => prod.id === 15)); // returns UNDEFINED for unavailable data...
console.log("");

// .includes() method
console.log(fruits);
const withAn = fruits.find((fruit) => fruit.includes("an"));
const tags = ["html", "css", "js"];
console.log(tags.includes("css"), "that 'css' exist in TAGS...");
console.log("");

// .startsWith() method...
console.log(withAn);
const startsWithO = fruits.find((fruit) => fruit.startsWith("o"));
console.log(startsWithO);
console.log("");

// .findIndex() method...
const indexOfTablet = products.findIndex((prod) => prod.id === 4);
console.log(indexOfTablet);
console.log("");

// some() method.. returns true if at least one condition is true
const ages = [15, 12, 17, 19, 24, 17];
console.log(
	ages.some((age) => age >= 18),
	"that some ages are 18yrs and above"
); // checking if some ages are above 18...
console.log(
	ages.some((age) => age % 2 === 0),
	"that there are even ages"
); // checking if even ages exist...
const password = ["!mMicky#123", "abcd1234."];
securePass = password.some((pass) => pass.length >= 8);
console.log(securePass);
console.log("");

// every() method.. returns true if all conditions are true
console.log(
	ages.every((age) => age >= 18),
	"that all  ages are 18yrs and above"
); // checking if all ages are above 18...
console.log(
	ages.every((age) => age > 10),
	"that all ages are above 10 "
); // checking if all ages are above 10...
console.log("");
console.log("");

// STRING METHODS...
// .split(separator) method... converts STRINGS to ARRAYS..
const str = "I love JavaScript for sure!";
const words = str.split(" ");
console.log(str);
console.log(words);
console.log(words[2]);
console.log(words[2][0]);

// .join(separator) method... converts ARRAYS to STRINGS...
const myTags = ["Frontend", "Developer"];
const role = myTags.join(" ");
console.log(role);

// .toUpperCase() & .toLowerCase() methods...
console.log(role.toUpperCase());
console.log(role.toLowerCase());

// .replace(old, new) method...
const favorite = "I love FIFA...";
const correction = favorite.replace("FIFA", "PES");
console.log(favorite);
console.log(correction);

// .trim() method...
const worseCaseScenarioText = " Hello   brooo!      ";
console.log(worseCaseScenarioText);
const splitedText = worseCaseScenarioText.split(" ");
const semiSplitedText = worseCaseScenarioText
	.trim()
	.split(" ")
	.filter((text) => text.length > 0)
	.join(" "); // PSA bro!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const polishedText = worseCaseScenarioText.trim();
console.log(splitedText);
console.log(semiSplitedText);
console.log(polishedText);

// .slice(start, end) method...
let profession = "Teacher";
const whatYouActuallyDo = profession.slice(0, 5);
console.log(whatYouActuallyDo);
console.log(profession);

// DEBUGGING SESSION...
const data = ["1", "2", "3"];
const result = data
	.map((n) => {
		console.log("Mapping", n);
		return n;
	})
	.filter((n) => {
		console.log("filtering", n);
		return n > 1;
	});
console.log(result);

console.log(["a", "b", "c"].join("-"));

// CHALLENGE 1: CAPITALIZING EACH WORD IN A SENTENCE...
const sentence = "hello world from ghana";
const sentenceToArray = sentence.split(" ");
let finalSentence = "";
console.log(sentenceToArray);
for (let word = 0; word < sentenceToArray.length; word++) {
	const capitalizedWord =
		sentenceToArray[word][0].toUpperCase() + sentenceToArray[word].slice(1);
	console.log(capitalizedWord);
	finalSentence += capitalizedWord + " ";
}
console.log(finalSentence.trim()); // PSA - 8/10💯
console.log("");

// More efficient solution - using map...
const mapSolution = sentence
	.split(" ")
	.map((word) => word[0].toUpperCase() + word.slice(1))
	.join(" ");
console.log(mapSolution);

// solution 2...
const oneLineSolution = (statement) =>
	statement
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
console.log(oneLineSolution("hello world from ghana"));

// solution 3... using .replace() with regex (advanced)
console.log("");
console.log(sentence);
const replacedSentence = sentence.replace(/\b\w/g, (char) =>
	char.toUpperCase()
);
console.log(replacedSentence);

// CHALLENGE 2... - FILTER ONLY USERS ABOVE 18
const people = [
	{ name: "kwame", age: 17 },
	{ name: "Ama", age: 21 },
	{ name: "Yaw", age: 18 },
];
const above18 = people.filter((person) => person.age >= 18);
console.log(above18);

// CHALLENGE 3... - SUM ALL EVEN NUMBERS IN AN ARRAY...
let arrayyy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(arrayyy);
const evenNumbers = arrayyy.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers);
let sumOfEvenNumbers = 0;
for (let index = 0; index < evenNumbers.length; index++) {
	const element = evenNumbers[index];
	console.log(element);
	sumOfEvenNumbers += element;
}
console.log("Sum of even numbers =", sumOfEvenNumbers);

// alternative solution...
const sum = arrayyy.reduce((total, num) => {
	return num % 2 === 0 ? total + num : total;
}, 0);
console.log("Sum =", sum);

// alternative solution... - chain filter + reduce
const finalSum = arrayyy
	.filter((num) => num % 2 === 0)
	.reduce((total, num) => total + num, 0);
console.log("final summation =", finalSum);

// FINAL CHALLENGE...
// PRACTICE TASK
// - Write a function that:
//   - Accepts a string of comma-separated numbers like "1,2,3,4"
//   - Converts it into an array of numbers
//   - Filters only the even ones
//   - Squares them
//   - Returns the final array

// PSA solution...
function practicalTask(str) {
	console.log("Input: ", str);
	const processedStr = str
		.split(",")
		.map((num) => Number(num))
		.filter((num) => num % 2 === 0);
	let finalArray = [];
	for (let n = 0; n < processedStr.length; n++) {
		// const squared = processedStr[n] * processedStr[n];
		const squared = processedStr[n] ** 2;
		console.log("squared numbers:", squared);
		finalArray.push(squared);
	}
	console.log("finalArray:", finalArray);
	return finalArray;
}
practicalTask("1,2,3,4");
console.log(practicalTask("1,2,3,4,5,6,7,8,9,10,12"));

// alternative solution...
function finalTask(str) {
	return str
		.split(",")
		.map(Number)
		.filter((num) => num % 2 === 0)
		.map((num) => num * num);
}
console.log(finalTask("3,2,1"));

// STRING METHODS...
const sampleText = "Alpha Hour...";
console.log(sampleText);
console.log(sampleText.length);
console.log(sampleText[0]);
console.log(sampleText[sampleText.length - 1]);
console.log(sampleText.indexOf("Hour"));
console.log(sampleText.endsWith("."));
console.log(sampleText.startsWith("A"));
console.log(sampleText.substring(0, 5));
console.log(sampleText.charAt(6));

// REPLACING TEXT...
console.log("");
const favAnimals = "I like cats but cats are cute";
console.log(favAnimals);
console.log(favAnimals.replace("cats", "dogs"));
console.log(favAnimals.replaceAll("cats", "dogs"));
console.log(favAnimals.replace(/cats/g, "dogs"));

// REPEATING & PADDING...
const star = "*";
const numeral = "5";
console.log(star.repeat(10));
console.log(numeral.padStart(3, "0"));
console.log(numeral.padEnd(3, "0"));

const email = "user@example.com";
const isValid = email.includes("@") && email.includes(".");
console.log(isValid);

const baseURL = "https://api.example.com";
const endpoint = "users";
const id = "123";

const fullURL = [baseURL, endpoint, id].join("/");
console.log(fullURL);
