"use strict"

let d = new Date();

let daysOfWeekArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Suturday"];
console.log("Current date and time: " + d);

console.log(`${d.getDate()}-${(d.getMonth() + 1 )}-${d.getFullYear()}-${daysOfWeekArray[d.getDay()]}`);