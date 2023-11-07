"use strict";

//Todo: Calculate the average score of a student
let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] }, 
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

//template of a function
function calculateAverageScores(_students) {
  //input
  let myStudents = []; // Empty array for the list of students
  myStudents = _students;

  //calculation
  // the average = Student1 Score 1 + Score 2 + Score 3 / amount of scores
  // Loop throught students
  // Loop through the scores, add all the scores and divide it by the amount of scores in the array
  let sumOverall = 0;
  

      for (let index = 0; index < myStudents.length; index++) {
        let aStudent = myStudents[index];
        console.log(`${index} : ${aStudent.name} ${aStudent.scores}`);
        // Loop through the scores,

        let totalscores = 0; // This defines the datatype number; otherwise it expects a string
        let averageScore = 0;
        
        for (let index = 0; index < aStudent.scores.length; index++) {
          let aScore = aStudent.scores[index];
          //   console.log(`${index} : ${aScore}`);
          totalscores += aScore; // Or +=  totalscores = totalscores + aScore;
        }
        averageScore = totalscores / aStudent.scores.length;
        // console.log(`Total scores ${totalscores}`);
        console.log(`Average score ${averageScore}`);


        
        // avgScore1 + avgScore2 + avgScore3 / num of scores.
        sumOverall += averageScore;
        

      } // inner for loop ends.
  let totalAverageOverall = sumOverall / myStudents.length;
  console.log("Sum of all averages: " + sumOverall);
  console.log("Averge of all averages: " + totalAverageOverall.toFixed(2));


  //output: 94.5
}
//Call function
calculateAverageScores(students);


// calculate average of all students:

// let averageOverall = students.averageScore / students.length;

let num1 = 4;
let num2 = 2;
let num3 = num1 + num2;
console.log(num3); 