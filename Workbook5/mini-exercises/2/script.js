"use strict"

let kids = [
    { first: "Natalie", last: "Plyers" },
    { first: "Brittany", last: "Ray" },
    { first: "Zachary", last: "Westly" }
];
function buildFullName(arrayElement) {
    return "Student: " + arrayElement.first + " " + arrayElement.last;
}
function displayName(arrayElement) {
    console.log(arrayElement);
}
let namesList = kids.map(buildFullName);
namesList.forEach(displayName);

// For each name add the tekst: Student:
// So the output will be student Nathalie PLayers