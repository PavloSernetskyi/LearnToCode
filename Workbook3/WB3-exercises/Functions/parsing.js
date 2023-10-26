"use strict"

let name = "Brenda Kaye";
let name2 = "John Cena";

//desired output.
// Name: Brenda Kaye
// First name: Brenda
// Last name: Kaye

// console.log(name);
// //parsing.
// let firstName = name.substring(0,6);
// let lastName = name.substring(6,10);
// console.log(`First name: ${firstName}`);
// console.log(`Last name: ${lastName}`);

//moving intro function.
function parseAndDisplayName(x){
    //parsing.
let firstName = name.substring(0,6);
let lastName = name.substring(6,10);

console.log(`First name: ${firstName}`);
console.log(`Last name: ${lastName}`);
}

parseAndDisplayName(name);
parseAndDisplayName(name2);