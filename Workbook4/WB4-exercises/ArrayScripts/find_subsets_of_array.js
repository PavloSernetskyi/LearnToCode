"use strict"


let menu = [
    { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
    { id: 2, item: "Burger", category: "Meal", price: 7.29 },
    { id: 3, item: "Salad", category: "Meal", price: 8.29 },
    { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
    { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];
function getMenuItemsInCategory(menu, category) {
    let matching = [];
    let numItems = menu.length;
    for (let i = 0; i < numItems; i++) {
        if (menu[i].category == category) {
            matching.push(menu[i]);
        }
    }
    return matching;
}
// show all the drinks
let drinks = getMenuItemsInCategory(menu, "Drink");
let numDrinks = drinks.length;
for (let i = 0; i < numDrinks; i++) {
    console.log(drinks[i].item +
        " $" + drinks[i].price.toFixed(2));
}