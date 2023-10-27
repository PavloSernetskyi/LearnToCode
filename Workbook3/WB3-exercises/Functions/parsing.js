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
/**
 *  * expected input single string with first and last name.
 * This function parses signle string into two pieces thus produces putput as first and last name.
 * @param {string} x - string argument for the function.
 * no return value. 
 */
function parseAndDisplayName(x){
    //parsing.
let firstName = x.substring(0,6);
let lastName = x.substring(6,10);

console.log(`First name: ${firstName}`);
console.log(`Last name: ${lastName}`);
}

parseAndDisplayName(name);
parseAndDisplayName(name2);


let myName = "Pavlo Sernetskyi";

console.log("My first name is: " + myName.slice(0,5));
console.log("My last name is: " + myName.slice(5,16));
