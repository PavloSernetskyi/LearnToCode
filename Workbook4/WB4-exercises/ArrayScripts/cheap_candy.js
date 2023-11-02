"use strict"

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.59 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Snikers", price: 1.79 },
    { product: "Bounty", price: 1.59 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "KitKat", price: 1.39 },
    { product: "Gummy Bears", price: 2.79 },
    { product: "Sour Patch", price: 10.44 },
    // TODO: fill the array with 10 candies of various
    // price ranges
];

// Which candies costs less than $4.00?
for (let index = 0; index < products.length; index++) {
    if(products[index].price < 4.00)
    {
        console.log(`Less than $4 ${products[index].product}, price $${products[index].price}`);
    }
    
}

console.log("Products with M&M are: ");
// Which candies has "M&M" its name?
for (let index = 0; index < products.length; index++) {
    //we will go through all array of object products if they contain "M&M". includes method is used.
    let targetSubstring = "M&M";
    if(products[index].product.includes(targetSubstring))
    {
        console.log(products[index].product + " their price $ " + products[index].price);
    }  
}
console.log("Swedish fish presence check... : ");
// Do we carry "Swedish Fish"?
for (let index = 0; index < products.length; index++) {
    let targetSubstring = "Swedish Fish";
    if(products[index].product.includes(targetSubstring))
    {
        console.log(products[index].product + " price $ " + products[index].price);
    }  
    
}