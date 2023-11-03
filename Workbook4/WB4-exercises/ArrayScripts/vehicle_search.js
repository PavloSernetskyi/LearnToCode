"use strict"

let vehicles = [
    {
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        color: "Red",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("12-30-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2023"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];


// Which vehicles are RED?
// Which vehicles are RED?
for (let index = 0; index < vehicles.length; index++) {
    if (vehicles[index].color.toLowerCase().includes("red")) { // Convert both to lower case
        console.log(`${vehicles[index].color} vehicles are: ${vehicles[index].licenseNo}`);
    }
}
// Which vehicles have registrations that are expired?
for (let index = 0; index < vehicles.length; index++) {
    if(vehicles[index].registrationExpires.getFullYear() < 2023)
    {
        console.log(`Registration expires on ${vehicles[index].licenseNo}`);
    }
}
// Which vehicles that hold at least 6 people?
for (let index = 0; index < vehicles.length; index++) {
    if(vehicles[index].capacity > 5){
        console.log(`These vehicles hold at least 6 seats ${vehicles[index].licenseNo}`);
    }
    
}
// Which vehicles have license plates that end with "222"?
for (let index = 0; index < vehicles.length; index++) {
    if(vehicles[index].licenseNo.endsWith("222")){
        console.log(`License plates ends with 222: ${vehicles[index].licenseNo}`);
    }
    
}