"use strict"

let person = {
    firstName: "Pavlo",
    lastName: "Sernestkyi",
    dateOfBirth: new Date(1995, 1, 8)
}

//objects store relative properties to the object.
let bankaccount = {
    bankaccountnumber: 800020232,
    pincode: 1234,
    balance: 10000
}

// create an object about a shoe.
let shoe = {
    brand: "Louis Vuitton",
    type: "LV Trainer Sneaker",
    color: ["Blue", "Green", "White", "Black"],
    price: 1220,
}
//! color has index because it is array inside of object.
//to access it we use shoe.color[index];
console.log(shoe.color[0]);

for (let index = 0; index < shoe.color.length; index++) {
    console.log(`The shoe color: ${shoe.color[index]}`);

}

let emp1 = {
    employeeId: "1",
    name: "Ezra",
    jobTitle: "Theater Teacher",
    payRate: 38.46
};
let emp2 = {
    employeeId: "2",
    name: "Elisha",
    jobTitle: "Game Programmer",
    payRate: 43.27
};

function displayEmployee(_employee, _id) {
    console.log("Employee: " + _employee.name);
    console.log("Employee ID: " + _employee.employeeId);
}
//passing whole objects into function. then func is procesing only two parameters since we indicated 2. can add more properties or less. it up to our object
displayEmployee(emp1);
displayEmployee(emp2);


//passingto the func whole obj.
// function passObj(_obj1){
//     return _obj1;
// }
// let data = passObj(emp1);
// console.log("Whole object" + data);

let activities = [ {
    price: 300,
    name: "Adventures",
    location: "Yosemite Park",
    startDate: ["11/6/2023","5/4/2023","12/8/2023"],
    activityLength: 10,
    description: "Explore nature and waterfalls."
},
{
    price: 25,
    name: "Museums",
    location: "Museum Of Modern Arts",
    startDate: ["1/2/2023","3/2/2023","11/3/2023"],
    activityLength: 4,
    description: "Apreciate the modern art"
},
{
    price: 40,
    name: "Wine Tastings",
    location: "Castello di Amorosa",
    startDate: ["2/2/2023","1/1/2023","10/8/2023"],
    activityLength: 2,
    description: "Visit on of the greates castles in California and taste some of the finest wines."
},

]

// Update the price of the first activity
activities[0].price = 55.0;

// Add a new date to the startDate array of the first activity
activities[0].startDate.push(new Date(2023, 10, 13));



