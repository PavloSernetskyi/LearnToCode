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
function parseAndDisplayName(x) {
    //parsing.
    let firstName = x.substring(0, 6);
    let lastName = x.substring(6, 10);

    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
}

parseAndDisplayName(name);
parseAndDisplayName(name2);


let myName = "Pavlo Sernetskyi";

// grab " " position in the string.
let space = myName.indexOf(" ");

//slices/works with strings of any size of first name.
console.log("My first name is: " + myName.slice(0, space));
console.log("My last name is: " + myName.slice(space + 1));

// slices only hardcoded positons
// console.log("My first name is: " + myName.slice(0,5));
// console.log("My last name is: " + myName.slice(5,16));


// put my code into function to work with string of diferent sizes. using " " as breaking point for spliting my string. 
// using index.Of(" ") to grab position.

let myName2 = "Peter Sernetskyi";

console.log();
console.log();



//function...
function parseAndDisplayName(_userName) {
    // grab " " position in the string.
    let space2 = _userName.indexOf(" ");

    //grab first name/ grab string until it hits " " - space char.
    let firstName = _userName.slice(0, space2);
    //grab the rest of the string after " " - space char.
    let lastName = _userName.slice(space2 + 1);

    console.log(`Name: ${_userName}`);
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");