"use strict"

let name1 = "Cher";
let name2 = "Brenda Kaye";
let name3 = "Dana Lynn Wyatt";


// Desired output.
// Name: Cher
// Only name: Cher
// Name: Brenda Kaye
// First name: Brenda
// Last name: Kaye
// Name: Dana Lynn Wyatt
// First name: Dana
// Middle name: Lynn
// Last name: Wyatt

console.log("Name: " + name1);
console.log("Only name: " + name1);
console.log("Name: " + name2);
console.log("First name: " + name2.substring(0,6));
console.log("Last name: " + name2.substring(6,10));
console.log("Name: " + name3);
console.log("First name: " + name3.substring(0,4));
console.log("Middle name: " + name3.substring(5,9));
console.log("Last name: " + name3.substring(10,15));



