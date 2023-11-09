//TODO this code demonstrates find, reduce and filter methods.
"use strict"

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    // TODO: fill the array with 10 candies of various
    // price ranges
];

products.push({ product: "Kit Kat", price: 2.79 })
products.push({ product: "Bounty", price: 5.79 })
products.push({ product: "Twix", price: 1.55 })
products.push({ product: "Roshen", price: 1.55 })
products.push({ product: "Gummy Bears", price: 0.79 })
products.push({ product: "Nuts", price: 1.44 })


//testing pushed products.
for (let index = 0; index < products.length; index++) {
    console.log(`The product is ${products[index].product} price is ${products[index].price}`);

}
console.log();


// Which candies costs less than $4.00?
//! in => func. extra variable pr needed for comparison.
let cheapCandy = products.filter((pr) => pr.price < 4);
for (let index = 0; index < cheapCandy.length; index++) {
    console.log(`Candies under $4 ${cheapCandy[index].product} :${cheapCandy[index].price}`);

}
console.log();
// Which candies has "M&M" its name?
let mm = products.filter((pr) => pr.product.includes("M&Ms"));
for (let index = 0; index < mm.length; index++) {
    console.log(`Candies that has "M&M" are: ${mm[index].product}`);

}
console.log();
// Do we carry "Swedish Fish"?
let swedishFish = products.find((element) => element.product === "Swedish Fish");
if (swedishFish != undefined) {
    console.log(`Yes we carry Swedish Fish and it costs ${swedishFish.price}`);
}
else {
    console.log(`We don't carry Swedish Fish`);
}