// 🔧 Callback Functions
// A callback is a function you pass as an argument to another function...

// TWO (2) TYPES OF CALLBACK FUNCTIONS...
// Synchronous Callback: Runs immediately (eg. Array.prototype.map)
// Asynchronous Callback: runs later (eg. setTimeout, i/o, event listeners)

function greet(name, formatter) {
	console.log(formatter(name));
}
greet("Michael", (n) => `Hello ${n}`);

// SYNCHRONOUT CALLBACKS - Array Methods...
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map((n) => n * 2);
const evens = nums.filter((n) => n % 2 == 0);
const odds = nums.filter((n) => n % 2 != 0);
const sum = nums.reduce((s, n) => (s += n));
console.log(nums);
console.log(doubled);
console.log(evens);
console.log(odds);
console.log(sum);

// CUSTOM HOF...
function forEach(arr, callback) {
	for (let index = 0; index < arr.length; index++) {
		callback(arr[index], index, arr);
	}
}
forEach([10, 20, 30], (val, index) => console.log(index, val));

// Comparators (sorting)
const people = [{ age: 30 }, { age: 20 }, { age: 24 }];
console.log(people.sort((a, b) => a.age - b.age));

// ASYNCHRONOUS CALLBACKS
// Timers
console.log("");
console.log("A");
setTimeout(() => {
	console.log("B");
}, 0);
console.log("C");

// DOM Events (browser)
// let button;
// button.addEventListen("click", function onClick(e) {
// 	console.log("Clicked", e.target);
// });

// Node-Style I/O (error-first)
// fs.readFile("data.txt", "utf8", (err, data) => {
// 	if (err) return console.log("Read failed:", err);
// 	console.log("File contents:", data);
// });

// Error-first callback pattern (Node-style)
function parseJSON(str, callback) {
	try {
		const data = JSON.parse(str);
		callback(null, data);
	} catch (err) {
		callback(err);
	}
}
parseJSON('{"ok":true}', (err, data) => {
	if (err) return console.error("Bad JSON", err);
	console.log(data.ok);
});

// Callback Hell (and how to avoid it)
// Eg. Pyramid of doom...

// getUser(1, (err, user) => {
// 	if (err) return handle(err);
// 	getPosts(user.id, (err, posts) => {
// 		if (err) return handle(err);
// 		getComments(posts[0].id, (err, comments) => {
// 			if (err) return handle(err);
// 			console.log("Done", comments);
// 		});
// 	});
// });

// fixing callback hell
// getUserActivities(1, onUser);

// function onUser(err, user) {
// 	if (err) return handle(err);
// 	getposts(user.id, onPosts);
// }

// function onPosts(err, posts) {
// 	if (err) return handle(err);
// 	getComments(posts[0].id, onComments);
// }

// function onComments(err, comments) {
// 	if (err) return handle(err);
// 	console.log("Done", comments);
// }

// Thus, to avoid callback hell...
// 1. Name your functions instead of inline anonymous ones
// 2. Factor steps into separate functions
// 3. keep consistent error-first style

// THIS IN CALLBACKS...
// NB: inside callbacks, THIS often changes...
const obj = {
	name: "Michael",
	sayLater() {
		setInterval(function () {
			console.log("Name:", this && this.name);
		}, 0);
	},
}; // thus, THIS is not an obj (in non-arrow functions...)

// fixing that with ARROW or bind...
// sayLater() {
//   setTimeout(() => {
//     console.log("Name:", this.name); // Michael
//   }, 0);
// }

// sayLater() {
//   setTimeout(function () {
//     console.log("Name:", this.name);
//   }.bind(this), 0);
// }

console.log("");

// Control Flow with callbacks...
function task1(cb) {
	setTimeout(() => {
		console.log("1");
		cb(null, "A");
	}, 200);
}
task1((n) => n);
