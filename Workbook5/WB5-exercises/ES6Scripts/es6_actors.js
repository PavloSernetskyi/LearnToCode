//TODO this code demonstrates find, reduce and filter methods.
"use strict"

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
];

// Who is the Academy Member whose ID is 187?
let member = academyMembers.find((person) => person.memID === 203);
if(member != undefined){
    console.log(`The person with ID 187 is ${member.name}`);
}
// Who has been in at least 3 films?
let membersIn3PlusMovies = academyMembers.filter((mem) => mem.films.length >= 3);

for (let index = 0; index < membersIn3PlusMovies.length; index++) {
    console.log(`Members who has been in at least 3 films: ${membersIn3PlusMovies[index].name}`);
    
}

// Who has a name that starts with "Bob"?
let includesBob = academyMembers.filter((mem) => mem.name.includes("Bob"));
for (let index = 0; index < includesBob.length; index++) {
    console.log(`starts with Bob: ${includesBob[index].name}`);
}

// HARDER: Which Academy Members have been in a film
// that starts with "A"
//! ?? should be put in a for loop to check all movies insdeat of
//! first element only: mem.films[0].includes("A"));
let startWithA = academyMembers.filter((mem) => mem.films[0].includes("A"));

for (let index = 0; index < startWithA.length; index++) {
    console.log(`Academy Members have been in a film that starts with "A": ${startWithA[index].name}`);
}


// //example...from previous wb.
// for (let index = 0; index < academyMembers.length; index++) {
//     if(academyMembers[index].films[0].includes("A"))
//     {
//         console.log(`Actors in the movies that start with A: ${academyMembers[index].name} 
//         and the name of the movies are ${academyMembers[index].films}
//         `);
//     }
    
// }