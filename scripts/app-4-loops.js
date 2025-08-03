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
	if (m == 3) continue;
	if (m == 6) continue;
	if (m > 8) break;
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
