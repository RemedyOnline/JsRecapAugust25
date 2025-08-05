// THE THIS KEYWORD...
// THIS refers to the object that is executing the current function...

// TOP 8 SCENARIOS ON THIS..
// 1. In Global Context...
// console.log(this);

// "use strict";
function sayName() {
	console.log(this);
}
sayName();

const person = {
	name: "Mike",
	greet() {
		console.log("Hello " + this.name);
	},
};

person.greet();
const greet = person.greet;
greet();

function showName() {
	console.log(this.name);
}

const newUser = { name: "Kofi" };
showName.call(newUser);
showName.apply(newUser);

const boundFunc = showName.bind(newUser);
boundFunc();

const team = {
	name: "Alpha",
	showTeam: function () {
		setTimeout(function () {
			console.log(this.name);
		}, 1000);
	},
};

team.showTeam(); // Prints what? Fix it to print "Alpha"
