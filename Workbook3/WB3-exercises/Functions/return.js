"use strict"

// paremeters _width, _length.
function calculateArea(_width, _length) {
    return _width * _length;
}

//passing two arguments for width and length.
let rectangleArea = calculateArea(4, 5);
console.log("The area of rectange is " + rectangleArea);



//Exercise: Calculate the Average of Three Numbers
//Objective: Create a JavaScript function called calculateAverage that takes three numbers as parameters.
//Task: Your function should calculate the average of these three numbers.
//Return: Use the return statement to return the calculated average.
//Test: Call your function with different sets of numbers and use console.log to display the returned average.

//this works very short code!
// Your function goes here
// function calculateAverage(_num1, _num2, _num3){
//     return (_num1 + _num2 + _num3) / 3;
// }

//for debuging purpose write this way!
function calculateAverage(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    const average = sum / 3;
    return average;
}

// Test your function
const avg1 = calculateAverage(10, 20, 30);
console.log("The average of 10, 20, 30 is: " + avg1);

const avg2 = calculateAverage(5, 10, 15);
console.log("The average of 5, 10, 15 is: " + avg2);