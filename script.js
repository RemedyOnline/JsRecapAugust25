// JS OBJECTS...

function laptop(brand, year, size) {
	this.brand = brand;
	this.year = year;
	this.size = size;
}

const myLaptop = new laptop();
myLaptop.brand = "hp";
(myLaptop.year = 2018), (myLaptop.size = 128);

console.log(myLaptop);

const yourLaptop = new laptop();
console.log(yourLaptop);

myLaptop.size += 64;
console.log(myLaptop);
console.log(myLaptop["brand"]);

console.log("year" in myLaptop);
console.log("sie" in myLaptop);
console.log(myLaptop.hasOwnProperty("brand"));

// OBJECT ITERATION TECHNIQUES...
for (let element in myLaptop) {
	console.log(element + " " + myLaptop[element]);
}

const myArray = [];
console.log(myArray);

myArray.push(2);
console.log(myArray);
console.log(myArray.push("2nd"));
console.log(myArray.push("2nd"));
console.log(myArray.push("2nd"));
