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
];


//sort numbers in ascending order in alphabetical order relying in ascii table.
products.sort(function (a, b) {
    if (a.product < b.product) return -1;
    else if (a.product == b.product) return 0;
    else return 1;
});

for (let index = 0; index < products.length; index++) {
    console.log(`${products[index].product} ${products[index].price}`);
    
}
console.log("----------------");

//sort products by prices from high to low.
products.sort(function (a, b) {
    return b.price - a.price;
});

for (let index = 0; index < products.length; index++) {
    console.log(`${products[index].product} ${products[index].price}`);
    
}

//alternative way to sort in descending order.
console.log("----------------");
products.sort(function (a, b) {
    if (a.price > b.price) return -1;
    else if (a.price == b.price) return 0;
    else return 1;
});

for (let index = 0; index < products.length; index++) {
    console.log(products[index].price);
    
}
//Results: [prices from high to low.]