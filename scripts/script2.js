// INTERVIEW Q & A

document.querySelector(".header").addEventListener("click", function (event) {
	if (event.target.matches(".child")) {
		console.log("Child clicked:", event.target.textContent);
	}
});

const parent = {
	greet() {
		console.log("Hello");
	},
};

const child = Object.create(parent);
child.greet();
console.log(parent);
console.log(child);

// fetch("data.json")
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))
// 	.catch((err) => console.error(err))
// 	.finally(() => console.log("done"));

console.log("");
console.log("");
console.log("Start");
setTimeout(() => {
	console.log("Async Task");
}, 1000);
console.log("End");

// WEB WORKERS...
const worker = new Worker("worker.js");
worker.postMessage("start");
worker.onmessage = (e) => console.log("from worker:", e.data);

// MEMOIZATION..
function memoizedAdd() {
	const cache = {};
	return function (a, b) {
		const key = `${a},${b}`;
		if (key in cache) return cache[key];
		cache[key] = a + b;
		return cache[key];
	};
}
const add = memoizedAdd();
console.log(add(2, 3));
console.log(add(2, 8));
console.log(add(2, 8));

// ERROR HANDLING...
// using try/catch blocks...
try {
	console.log("try catch - error handling");
} catch (error) {
	console.error(error.message);
}

// using promise .catch()
// fetch("url").then(console.log("this")).catch(console.log("error"));

// using async/await with try/catch..
// async function fetchData() {
// 	try {
// 		const data = await fetch("link");
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// ES Modules...
// export const name = "Slyy";
// export default function greet() {
// 	console.log("Hello");
// }

// import { name, greet } from "./";

// example of promises
// fetchData()
// 	.then((res) => processData(res))
// 	.then((final) => console.log(final))
// 	.catch((err) => console.error(err));

async function run() {
	try {
		const res = await fetchData();
		const final = await processData(res);
		console.log(final);
	} catch (err) {
		console.error(err);
	}
}

// the THIS method...
const obj = {
	name: "Mike",
	greet() {
		console.log(this.name);
	},
};

obj.greet();

// the SYMBOL type...
const id = Symbol("id");
const userDetails = {
	name: "Paul",
	[id]: 12,
};
console.log(userDetails[id]);

// SHALLOW & DEEP COPYING OF OBJECTS...
const originalObj = {
	a: 1,
	b: 2,
	c: 3,
	d: { e: 4 },
};
const shallowCopy = { ...originalObj };
console.log(originalObj);
console.log(shallowCopy);
shallowCopy.d.e = 12;
shallowCopy.b = 10;
console.log(shallowCopy);

const deepCopy = structuredClone(originalObj);
console.log(deepCopy);
deepCopy.d.e = 6;
console.log(deepCopy);
console.log(originalObj);

console.log("");
console.log("");
console.log("");

document.querySelector("a").addEventListener("click", (e) => {
	e.preventDefault(); // stops link navigation
	console.log("Navigation prevented");
});

div.innerHTML = "<strong>Hi</strong>"; // renders bold
div.innerText = "<strong>Hi</strong>"; // literally shows <strong>Hi</strong>
div.textContent = "<strong>Hi</strong>"; // same as innerText here, but includes hidden text if present
