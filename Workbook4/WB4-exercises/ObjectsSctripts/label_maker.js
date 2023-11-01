"use strict"

let myInfo = {
    name: "Pavlo Sernetskyi",
    address: "345 Forest Street",
    city: "Castro Valley",
    state: "CA",
    zip: 94546
};

function printContact(myInfo) {
    console.log(`
    ${myInfo.name}
    ${myInfo.address} 
    ${myInfo.city}, ${myInfo.state} ${myInfo.zip}`);
}

printContact(myInfo);