"use strict"

let menu = [
    { item: "Hamburger", price: 6.95 },
    { item: "Cheeseburger", price: 7.95 },
    { item: "Hot dog", price: 4.95 },
    { item: "Coca-Cola", price: 1.95 },
    { item: "Fanta", price: 1.65 },
    { item: "Ice-Cream", price: 2.00 },
    { item: "Twix", price: 1.75 }

];

for (let index = 0; index < menu.length; index++) {
    if (menu[index].price < 2) {
        console.log(`Less than $2 ${menu[index].item} and it's price is $${menu[index].price}`);
    }

}
// hardcoaded display.
console.log(`${menu[1].item}: $${menu[1].price}`);

const arda = {
    age : 17,
    stats: [
        {
            competition: "Super League",
            appearences: 3,
            goals: 2
        },
        {
            competition: "Europa League",
            appearences: 2,
            goals: 1
        }
    ]
};

// for each loop do display array of objects.
let totalGoals = 0;
//for each loop
for(let stat of arda.stats){
    totalGoals += stat.goals;
}
console.log(totalGoals);
