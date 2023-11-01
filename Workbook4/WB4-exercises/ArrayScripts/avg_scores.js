"use sctrict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(_array){
    //sum up all scores in the array.
    let sum = 0;
    let average = 0;
    for (let index = 0; index < _array.length; index++) {
        sum = sum + _array[index];
        
    }
//    console.log(sum);
    //divide by size of array to get average.
    average = sum / _array.length
    //return average score.
    return average;

}

let yourAvgResult = getAverage(yourScores);
console.log("Your average score is: " + yourAvgResult.toFixed(2));


let myAvgResult = getAverage(myScores);
console.log("My average score is: " + myAvgResult.toFixed(2));