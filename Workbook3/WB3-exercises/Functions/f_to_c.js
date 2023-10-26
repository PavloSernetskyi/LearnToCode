"use strict"

function convertFahrenheitToCelsius(_fahrenheit){
    // C = (5/9) * (F - 32)
    let convertedTempaterue = (5/9) * (_fahrenheit - 32);
    return convertedTempaterue;
}

let temperatureConvertedToCelcius = convertFahrenheitToCelsius(100);

console.log(Math.round(temperatureConvertedToCelcius));

// convert. 212, 90, 72, 32, 0, -40.
let temperaturesInF = [212, 90, 72, 32, 0, -40];

//using for loop to process all temperatures in function.
//* this for loop displays array of converted temperatures by calling function convert temp and recievs array of temperatures as an arguments.
for (let index = 0; index < temperaturesInF.length; index++) {
    const convertedTemp = convertFahrenheitToCelsius(temperaturesInF[index]);
    
    console.log("The temperatures are: " + Math.round(convertedTemp));
}

