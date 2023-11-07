"use strict"

let kids = ["Natalie", "Brittany", "Zachary"];
kids.sort(); // Sorts the array
let numKids = kids.length;
for (let i = 0; i < numKids; i++) {
    console.log(kids[i]);
}

//sort numbers in ascending order.
let numbers = [3, 27, 400, 1, 111, 5];
numbers.sort(function (a, b) {
    if (a < b) return -1;
    else if (a == b) return 0;
    else return 1;
});
console.log(numbers);
// Results: [1, 3, 5, 27, 111, 400]

//sort numbers in descending order.
let numbers2 = [3, 27, 400, 1, 111, 5];
numbers2.sort(function (a, b) {
    if (a > b) return -1; // right order
    else if (a == b) return 0;
    else return 1; // swap, wrong order
});
console.log(numbers2);
// Results: [400, 111, 27, 5, 3, 1]