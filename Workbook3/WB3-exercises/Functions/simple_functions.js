"use strict"

let myName = "Pavlo";
let favoriteMovie = "Avengers";
let musician = "Jimmy Hendrix";


function favoriteThings() {
    console.log(`My name is ${myName}`);
    console.log(`My favorite movie is ${favoriteMovie}`);
    console.log(`Favorite musician is ${musician}`);
}



function whyImHere() {
    console.log(`I have joined learn to code program to learn HTML, CSS and JavaScript!`);
}



function favoritePlace() {
    console.log(`Favorite place is Italy`);
}


// calling first three functions.
// favoriteThings();
// whyImHere();
// favoritePlace();

// more functions.
let name1 = "Pavlo Sernetskyi";
let address1 = "45621 Forest Ave";
let city1 = "Castro Valley";
let state1 = "CA";
let zip1 = "94546";



function displayMailingLabel(name, address, city, state, zip) {
    console.log(`The name is: ${name}`);
    console.log(`The address is: ${address}, ${city}, ${state}, ${zip}`);
}

displayMailingLabel(name1, address1, city1, state1, zip1);

// add numbers.
let num1 = 3;
let num2 = 5;

function addNumbers(x, y) {
    let result = x + y;
    console.log("The result is " + result);
}

addNumbers(num1, num2);


//example with return.
function getNumGrandKids() {
    // in a better example, we might look this up in a database
    return 6;
}

let num3 = getNumGrandKids();
console.log(num3);
console.log();
console.log();
console.log();


//decision function with return.
function getNumGrandKids(name) { // name is the parameter
    let num = 0;
    if (name == "Dana") {
        num = 6;
    }
    else if  (name == "Karla") {
        num = 3;
    }
    else if (name == "Leslye") {
        num = 2;
    }
    return num;
}
let num = getNumGrandKids("Dana"); // "Dana" is argument
console.log(num);
num = getNumGrandKids("Karla");
console.log(num);
