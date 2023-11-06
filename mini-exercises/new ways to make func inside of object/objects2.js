"use strict"


let person = {
    personName: "Pavlo",
    age: "22"
};

function displayInfo(_myPerson) {

    let display = {
        firstChar: _myPerson.personName.charAt(0),
        firstAgeChar: _myPerson.age.charAt(0)
    }
    return display;
}

console.log(displayInfo(person));


