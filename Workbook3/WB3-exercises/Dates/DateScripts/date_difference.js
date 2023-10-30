"use strict"

let startDate = new Date("July 11, 2022");
let endDate = new Date("November 11, 2022");

//dai in milisecond = 24 * 60min * 60 sec * 1000ms.
let dayInMs = 24 * 60 * 60 * 1000;

let msBetweenTwoDates = endDate.getTime() - startDate.getTime();

let daysBetweenTwoDates = msBetweenTwoDates / dayInMs;

console.log("There are " + Math.round(daysBetweenTwoDates) + " days between two dates");
