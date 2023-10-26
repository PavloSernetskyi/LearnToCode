// ARRAY of shoes
const shoes = [
    {name: "Sporty Runner", sizes: [6, 7, 8, 9]},
    {name: "Casual Walker", sizes: [7, 8, 9, 10, 11]},
    {name: "Elegant Heel", sizes: [5, 6, 7, 8]}
];

// FOR LOOP: Print all shoe names
for (let i = 0; i < shoes.length; i++) {
    console.log(shoes[i].name);
}

// FOREACH LOOP: Print all available sizes for each shoe
shoes.forEach(shoe => {
    console.log(`Available sizes for ${shoe.name}: ${shoe.sizes.join(', ')}`);
});

// Comment: Loops can be used to iterate through lists of shoes and display specific information.
// ...

// MAP: Create a new array containing only the shoe names
const shoeNames = shoes.map(shoe => shoe.name);
console.log(shoeNames);
// Comment: 
// Pros: Efficient for transforming data without modifying the original array.
// Cons: Always returns a new array of the same length, not suitable for filtering.

// FILTER: Get only the shoes that are in stock
const inStockShoes = shoes.filter(shoe => shoe.inStock);
console.log(inStockShoes);
// Comment: 
// Pros: Great for selectively choosing elements based on a condition.
// Cons: Always returns a new array, potentially inefficient for large data sets.

// REDUCE: Calculate the total price of all shoes in the collection
const totalShoeValue = shoes.reduce((acc, shoe) => acc + shoe.price, 0);
console.log(totalShoeValue);
// Comment: 
// Pros: Extremely versatile for aggregating data into a single value.
// Cons: Can be more complex and harder to read than other loop methods.

// FOR OF LOOP: Print the name and price of each shoe
for (const shoe of shoes) {
    console.log(`${shoe.name} - $${shoe.price}`);
}
// Comment:
// Pros: Simplifies iterating over iterable objects without needing indices.
// Cons: Doesn't provide direct access to indices; not as flexible for complex operations.

// WHILE LOOP: Find the first shoe that's out of stock
let i = 0;
while (i < shoes.length && shoes[i].inStock) {
    i++;
}
if (i < shoes.length) {
    console.log(`The first shoe out of stock is: ${shoes[i].name}`);
}


// Another while loop
let age = 63;

while (age < 65) {
  console.log("You are not old enough to retire");
  age++;
}

// Comment:
// Pros: Offers more control over loop conditions and when the loop stops.
// Cons: Requires manual increment of counter; can lead to infinite loops if not careful.

// DO WHILE LOOP: Ask user to choose a shoe size (simplified for the example)
let chosenSize;
do {
    chosenSize = prompt("Choose a shoe size (between 5 and 11):");
} while (chosenSize < 5 || chosenSize > 11);
console.log(`You chose size: ${chosenSize}`);
// Comment:
// Pros: Ensures the loop body runs at least once before checking the condition.
// Cons: Less commonly used; can be confusing compared to regular while loops.

