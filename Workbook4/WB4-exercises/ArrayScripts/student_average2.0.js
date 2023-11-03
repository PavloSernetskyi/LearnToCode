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
    console.log(`Student name: ${students[index].name}`);

    // usinginner loop to loop through array of scores to 1) sum up each array and then 2) find average of each student's scores.
    let sumOfEachArrayOfScores
        = 0;
    for (let j = 0; j < students[index].scores.length; j++) {
        sumOfEachArrayOfScores
            = sumOfEachArrayOfScores
            + students[index].scores[j];
    }
    console.log(`Scores: ${students[index].scores}`);
    console.log(`Sum of each array is ${sumOfEachArrayOfScores
        }`);
    let eachStudentAvg = sumOfEachArrayOfScores / students[index].scores.length;
    console.log("Each student average: " + eachStudentAvg.toFixed(2) +"\n");
}