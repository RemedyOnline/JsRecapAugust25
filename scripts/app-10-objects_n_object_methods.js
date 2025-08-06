// OBJECTS & OBJECT METHODS...

// object -> property -> key/value

// ACCESSING OBJECT PROPERTIES...
const user = {
	name: "Mike",
	age: 22,
	isDeveloper: true,
};

// DOT NOTATION...
console.log(user.name);

// BRACKET NOTATION...
console.log(user["age"]);
const key = "isDeveloper";
console.log(user[key]); // for dynamic keys...

// UPDATING & ADDING PROPERTIES...
user.age = 19;
console.log(user.age);
user.country = "Ghana";
console.log(user);

// DELETING PROPERTIES...
delete user.age;
console.log(user);
user.age = 19;

// LOOPING THROUGH OBJECTS... - for...in
for (let u in user) {
	console.log(`${u}: ${user[u]}`);
}

console.log("age" in user);
console.log("country" in user);

// OBJECT METHODS...
// - Object.keys(myObj) - returns an array of keys...
console.log("Keys:", Object.keys(user));

// - Object.values(myObj) - returns an array of values
console.log("Values:", Object.values(user));

// - Object.entries(myObj) - returns an array of key-value pairs as nested arrays
const entries = Object.entries(user);
console.log("Entries:", entries);

for (const [color, hex] of entries) {
	console.log(`${color}: ${hex}`);
}

// - Object.assign() - copies values from one object to another...
let person = Object.assign(user);
console.log("Person object:", person);
console.log("User object:", user);
const newName = {
	name: "Kofi",
};
person = Object.assign(user, newName);
console.log("person:", person);
console.log("user:", user);
console.log("newName:", newName);

console.log("");

const target = { name: "John" };
const source1 = { age: 23 };
const source2 = { city: "Paris" };
console.log("target object", target);

const result = Object.assign(user, target, source1, source2);
console.log("result", result);
console.log("user", user);
console.log("target", target);
console.log("source1", source1);
console.log("source2", source2);

console.log("");
console.log("");
console.log("");

// Object.freeze(obj) - makes the object IMMUTABLE...
const config = {
	apiUrl: "https://api.com",
	version: "1.0",
};
Object.freeze(config);
console.log(config);
// const modifiedConfig = Object.assign(config, newName); // INVALID TO DO..
// console.log(modifiedConfig);
config.apiUrl = "https://googleapi.com"; // SILENTLY IGNORED..
config.title = "Remedy APIs"; // SILENTLY IGNORED..
delete config.version; // SILENTLY IGNORED...
console.log(config);

// Object.hasOwn() - Checks if a property is directly on the object...
console.log(Object.hasOwn(user, "isDeveloper"));
console.log(Object.hasOwn(user, "toString"));
console.log(user);

// REAL WORLD EXAMPLE - COMBO
const userData = {
	id: 1,
	name: "Alice",
	role: "admin",
	salary: 399.99,
};

const userDataKeys = Object.keys(userData);
const userDataValues = Object.values(userData);
const formEntry = Object.entries(userData)
	.map(([key, value]) => `${key}: ${encodeURIComponent(value)}`)
	.join(" - ");
console.log(userDataKeys);
console.log(userDataValues);
console.log(userData);
console.log(formEntry);
console.log("");
console.log("");

// OBJECTS VS ARRAYS...

// NESTED OBJECTS...
let student = Object.assign(user);
delete student.city;
student.address = { city: "Melbourne", streetNo: 712 };
student.grades = [72, 86, 79, 90, 81];
console.log(student);
console.log(student);
console.log(student.address);
console.log(student.address.streetNo);
console.log(student.grades[1]);

const myself = {
	firstName: "Michael",
	lastName: "Prempeh",
	fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};
console.log(myself);
console.log(myself.fullName());

// HOW TO DEBUGGING OBJECTS..
console.log(JSON.stringify(student, null, 2));

// CHALLENGE 1. Create an object car, with props
// brand, model, & year. Add method getAge() that
// returns teh age of the car

const car = {
	brand: "Toyota",
	model: "RAV 4",
	year: 2020,
	getAge() {
		const today = new Date();
		const afeWei = today.getFullYear();
		console.log(afeWei);
		const carAge = afeWei - this.year;
		return `This car is ${carAge} years old!`;
	},
}; // PSA solution...

console.log(car.getAge());
console.log("");
console.log("");
console.log("");
console.log("");

// CHALLENG 2. Given an object, write a function that loops through your object...
const users = {
	user1: { name: "Kwame", age: "22" },
	user2: { name: "Ama", age: "19" },
};
function readObject(obj) {
	const userKeys = Object.keys(users);

	for (let user = 0; user < userKeys.length; user++) {
		const userKey = userKeys[user];
		const userObject = users[userKey];

		const name = userObject.name;
		const age = userObject.age;
		console.log(`${name} is ${age} years old`);
	}
}
readObject(users);

// // CHALLENGE 3. Write a fxn that takes an object and returns an array of strings.
// const sampleObj = { name: "Remedy", isMarried: false };
// const objArray = Object.entries(sampleObj);
// console.log(objArray);
