"use strict"

let teams = ["Red Sox", "Rangers", "Blue Jays",
    "Astros", "White Sox", "Rangers"];
let index = teams.indexOf("Rangers"); // returns 1
if (index == -1)
    console.log("Item not found");
else
    console.log("Item at position: " + index);

console.log("Second section");

let teams2 = ["Red Sox", "Rangers", "Blue Jays",
    "Astros", "White Sox", "Rangers"];
let index2 = teams2.indexOf("Rangers", 3);
if (index2 == -1)
    console.log("Item not found");
else
    console.log("Item at position: " + index2);


console.log("Third section");
let teams3 = ["Rangers", "Blue Jays",
    "Astros", "White Sox", "Rangers"];
let firstIndex = teams3.indexOf("Rangers"); // returns 0
let lastIndex = teams3.lastIndexOf("Rangers"); // returns 4
console.log("Item at position: " + firstIndex);
console.log("Item at position: " + lastIndex);