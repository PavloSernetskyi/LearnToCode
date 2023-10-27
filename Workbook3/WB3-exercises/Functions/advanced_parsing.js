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

// console.log("Name: " + name1);
// console.log("Only name: " + name1);
// console.log("Name: " + name2);
// console.log("First name: " + name2.substring(0,6));
// console.log("Last name: " + name2.substring(6,10));
// console.log("Name: " + name3);
// console.log("First name: " + name3.substring(0,4));
// console.log("Middle name: " + name3.substring(5,9));
// console.log("Last name: " + name3.substring(10,15));


//function...
function parseAndDisplayName(_userName) {
    // grab " " position in the string.
    let space = _userName.indexOf(" ");
    let space2 = _userName.lastIndexOf(" ");

    //grab first name/ grab string until it hits " " - space char.
    let firstName = _userName.slice(0, space);
    //grab the middle name after " " - space char.
    let middleName = _userName.slice(space + 1, space2);

    // grab string after last " " - char.
    let lastName = _userName.slice(space2 + 1);

    console.log(`Name: ${_userName}`);
    console.log(`First name: ${firstName}`);
    console.log(`Middle name: ${middleName}`);
    console.log(`Last name: ${lastName}`);
}

parseAndDisplayName("Brenda Kate Smith");
// parseAndDisplayName("Ian Auston");
// parseAndDisplayName("Siddalee Grace");

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");
