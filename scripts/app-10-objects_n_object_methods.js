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
console.log("Dynamic Key - 1:", user[key]); // for dynamic keys...
console.log("Dynamic Key - 2:", user["isDeveloper"]); // for dynamic keys...
console.log(user);

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
	// console.log(u);
	// console.log(`${u}`);
	// console.log(`${user[u]}`);
	console.log(`${u}: ${user[u]}`);
	// console.log(user.u);
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

const product = {
	name: "phone",
	brand: "iPhone",
	color: "sea-blue",
	storage: 128,
	isNew: true,
};

const productEntries = Object.entries(product);
console.log(productEntries);

for (const [key, value] of productEntries) {
	console.log(`${key} of product is - ${value}`);
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
user.brand = "Samsung";

console.log("");
const newProduct = Object.assign(product, user);
console.log("New Product:", newProduct);

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

console.log("");

// Object.hasOwn() - Checks if a property is directly on the object...
console.log(Object.hasOwn(user, "isDeveloper"));
console.log(Object.hasOwn(user, "toString"));
console.log("Testing if CONFIG is FROZEN", Object.isFrozen(config));
console.log("Testing if PRODUCT is FROZEN", Object.isFrozen(product));

console.log(user);
console.log("");

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
	.join("; ");

console.log("Object KEYS", userDataKeys);
console.log("Object VALUES", userDataValues);
console.log("Object VALUES - 3rd Item", userDataValues[2]);
console.log("Object", userData);
console.log("Object LIST", formEntry);
console.log("");
console.log("");

// OBJECTS VS ARRAYS...

// NESTED OBJECTS...
let student = Object.assign(user);
console.log("USER OBJ:", user);
console.log("STUDENT OBJ:", student);
delete student.city;
student.address = { city: "Melbourne", streetNo: 712 };
student.grades = [72, 86, 79, 90, 81];
console.log(student);
console.log(student);
console.log(student.address);
console.log(student.address.streetNo);
console.log(student.grades[1]);

// HOW TO DEBUGGING OBJECTS..
console.log(JSON.stringify(student, null, 2));

console.log("");
console.log("");

let someone = Object.assign({}, user);
console.log("USER:", user);
console.log("SOMEONE:", someone);
console.log("Has GRADES?", someone.hasOwnProperty("grades"));
console.log("SOMEONE GRADES:", someone.grades);
console.log("SOMEONE:", JSON.stringify(someone));

delete someone.grades;
console.log("SOMEONE:", someone);
console.log("Has GRADES?", someone.hasOwnProperty("grades"));
console.log("SOMEONE GRADES:", someone.grades);
console.log("SOMEONE:", JSON.stringify(someone));
console.log(JSON.stringify(someone, null, 2));

console.log("");
console.log("");

let anotherPerson = { ...user };
console.log("ANOTHER PERSON:", anotherPerson);
delete anotherPerson.address;
console.log("ANOTHER PERSON:", anotherPerson);

console.log("");
console.log("");

const myself = {
	firstName: "Michael",
	lastName: "Agyemang Prempeh",
	fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};
console.log("MySelf OBJ:", myself);
console.log("MySelf Fullname fxn:", myself.fullName());

console.log("");
console.log("");

// CHALLENGE 1. Create an object car, with props
// brand, model, & year. Add method getAge() that
// returns the age of the car

const newCar = {
	brand: "Mercedes",
	model: "GLC",
	releaseYear: 2021,
	getAge() {
		const today = new Date();
		const currentYear = today.getFullYear();
		const carAge = currentYear - this.releaseYear;
		return `This ${newCar.brand} ${newCar.model} is at least ${carAge} years on the road...`;
	},
};
console.log(newCar);
console.log(newCar.getAge());
const carAgeFxn = newCar.getAge();
console.log(carAgeFxn);

console.log("");
console.log("");

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

// // // CHALLENGE 3. Write a fxn that takes an object and returns an array of strings.
// // const sampleObj = { name: "Remedy", isMarried: false };
// // const objArray = Object.entries(sampleObj);
// // console.log(objArray);
