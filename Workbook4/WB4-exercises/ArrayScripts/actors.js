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
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];
// Who is the Academy Member whose ID is 187?
for (let index = 0; index < academyMembers.length; index++) {
    if(academyMembers[index].memID === 187)
    {
        console.log(`Academy Member whose ID is 187 is ${academyMembers[index].name}`);
    }
}
// Who has have been in at least 3 films?
for (let index = 0; index < academyMembers.length; index++) {
    //! films 0.
    if(academyMembers[index].films.length >= 3)
    {
        console.log(`Has have been in at least 3 films ${academyMembers[index].name}`);
    }
    
}
// Who has a name that starts with "Bob"?
for (let index = 0; index < academyMembers.length; index++) {
    if(academyMembers[index].name.includes("Bob")){
        console.log("Names that start with Bob: " + academyMembers[index].name);
    }
    
}
// HARDER: Which Academy Members have been in a film
// that starts with "A"
for (let index = 0; index < academyMembers.length; index++) {
    if(academyMembers[index].films[0].includes("A"))
    {
        console.log(`Actors in the movies that start with A: ${academyMembers[index].name} 
        and the name of the movies are ${academyMembers[index].films}
        `);
    }
    
}