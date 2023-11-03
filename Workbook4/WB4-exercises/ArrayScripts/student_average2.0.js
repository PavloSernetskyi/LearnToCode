"use strict"

let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

for (let index = 0; index < students.length; index++) {
    console.log(`Students: ${students[index].name}`);
    // usinginner loop to loop through array of scores to find average of each student.
    let averageOfEachStudent = 0;
    for (let k = 0; k < students[index].scores; k++) {
        averageOfEachStudent += students[index].scores;
        console.log(`${students[index].scores}`);
    }
    
}