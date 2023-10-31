//1) Write a JavaScript program that checks if a given number is even or odd using an if statement.

//2) Create an array of your favorite fruits and use a for loop to print each fruit's name.

//3) Write a function that takes an array of numbers and returns the sum of all the numbers.


let num = 4;

if (num % 2 === 0)
{
    console.log("The number is even");
}
else
{
    console.log("The number is odd");
}
console.log(num);

let arrayOfFruits = ["Orange", "Banana", "Peach", "Apple"];
for (let index = 0; index < arrayOfFruits.length; index++) {
    console.log("My favorite fruits are " + (index + 1)+ ": " + arrayOfFruits[index]);
}


function arrayOfNum(numbers){
    let sum = 0;
    //this for loop add up all numbers in the array.
    for (let index = 0; index < numbers.length; index++) {
        sum = sum + numbers[index];
    }
    return sum;
}

let nums = [1,2,3];

console.log(arrayOfNum(nums));

