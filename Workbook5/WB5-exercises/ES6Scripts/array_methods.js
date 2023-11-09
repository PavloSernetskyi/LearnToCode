//TODO contains examples with methods: map, for each, reduce.
// "use strict" enforces a stricter set of rules in JavaScript,
// catching common coding errors and preventing the use of certain error-prone features.
"use strict";

let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];

// a
// Function to build output string for each item in the cart
function buildOutput(cartElement) {
    return "Item: " + cartElement.item;
}

// Function to display the output of each item
function displayItemOutput(arrayElement) {
    console.log(arrayElement);
}

// Map the cart array to build output strings for each item
let filteredItems = cart.map(buildOutput);

// Display the output of each item using forEach
filteredItems.forEach(displayItemOutput);

//b

function getSum(currentTotal, arrayValue) {
    // adds the array value to the accumulated total

    return currentTotal + (arrayValue.price * arrayValue.quantity);
}

let sum = cart.reduce(getSum, 0);
// sum contains 60.82
console.log(`The total sum is ${sum}`);


//b2 alternative way to use reduce function..
const cartTotal = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);

console.log("Alternative total " + cartTotal); // Outputs the total price of all items in


//c
console.log("\nSorted list...");
filteredItems = cart.map(buildOutput).sort();
filteredItems.forEach(displayItemOutput);