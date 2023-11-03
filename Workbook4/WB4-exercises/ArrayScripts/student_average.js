"use strict"

//array of students objects.
let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];


for (let i = 0; i < students.length; i++) {
    console.log(`The students: ${students[i].name}`);
    let sum = 0;
    //display each array of scores. simple.
    console.log("Individual array: " + students[i].scores);
    //this inner loop steps through array of scores. and sumps up each aray of scores. and stores them in sum array.
    for (let j = 0; j < students[i].scores.length; j++) {
        sum = sum + students[i].scores[j];
    }
    console.log("Sum of each individual array of scores: " + sum);
    //calculate average of each
    let average = sum / students[i].scores.length;
    console.log(`Avergae: ${average.toFixed(2)}\n`);

}
//console.log(students[3].scores[0]); // 98.
