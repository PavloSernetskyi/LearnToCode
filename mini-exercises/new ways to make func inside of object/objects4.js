"use strict"

let peopleInformation = [
    { personName: "Juan Espinoza", personAge: 29 },
    { personName: "Alma Rosas", personAge: 35 },
    { personName: "Isabella Rosas", personAge: 10 }
];

// Function to find a person by full name and return a new object with their first letter of the name and age
function getFirstLetterAndAgeByName(fullName) {
    let person = peopleInformation.find(p => p.personName === fullName);
    if (!person) {
        return null; // Person not found
    }
    return { 
        firstLetter: person.personName[0], 
        age: person.personAge 
    };
}

// Example usage:
let personInfo = getFirstLetterAndAgeByName("Alma Rosas");
if (personInfo) {
    console.log(personInfo);
} else {
    console.log("Person not found.");
}

// Define the method outside the objects
function getFirstLetterAndAge() {
    return { firstLetter: this.personName[0], age: this.personAge };
  }