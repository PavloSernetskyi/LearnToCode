
let peopleInformation = [
    { personName: "Juan Espinoza", personAge: "29" },
    { personName: "Alma Rosas", personAge: "35" },
    { personName: "Isabella Rosas", personAge: "10" }
];

// Function to display the first letter of the passed _person's name and their full name
function displayPersonFirstLetterAndName(_person) {
    let message = `
     First Letter: ${_person.personName[0]},
     Full Name: ${_person.personName} 
     First number of age: ${_person.personAge.charAt(0)}`;
    console.log(message);
}

// Example usage:
displayPersonFirstLetterAndName(peopleInformation[0]); // Pass the object of Juan Espinoza