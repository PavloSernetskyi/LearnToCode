"use strict"

//Mini-exercise: Create a JavaScript function that calculates the total cost for a given number of nights and a nightly rate.
//Define a function named calculateTotalRate that takes two parameters: nightStaying and ratePerNight. Inside the calculateTotalRate function, write code to calculate the total cost by multiplying the nightStaying by the ratePerNight. You can use the * operator for multiplication.

function totalCost(numberOfNigths, nightlyRate)
{
    const total = numberOfNigths * nightlyRate;
    //return sends data to the same place where it was callded from.
    return total;
}

let nightlyRate = 150;
let numberOfNigths = 3;
//call func with 2 args. and then return data and store in totalPrice variable.
let totalPrice = totalCost(nightlyRate, numberOfNigths);
console.log(`Total cost for ${numberOfNigths} nights is $${totalPrice}`);


//to display in html
let message = `Total cost is $${totalPrice}`;
document.getElementById('message').innerText = message;