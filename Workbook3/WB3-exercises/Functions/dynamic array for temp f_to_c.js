// "use strict"

// //TODO Create a function that converts temperature

// // //Declare the current temp

// //Declare the conversion calculation
// const celsiusTemp = FtoC(fahrenheit);

// //Calculation Function
// function FtoC(fahrenheit) {
//     //covert Fahrenheit to celcius
//     const celsius = Math.round(((fahrenheit - 32) * 5) / 9);
//     return celsius;
// }

// FtoC(44);





// TODO: Create a function to convert temperature from Fahrenheit to Celsius

/**
 * Converts temperature from Fahrenheit to Celsius
 * @param {number} temperatureInFahrenheit - The temperature in Fahrenheit
 * @return {number} - The converted temperature in Celsius, rounded to the nearest integer
 */
function convertFahrenheitToCelsius(temperatureInFahrenheit) {
    const temperatureInCelsius = Math.round((temperatureInFahrenheit - 32) * 5 / 9); //google the conversion formula
    return temperatureInCelsius; //return: can be used outside of this function
}

//! Testing to see if the function is working
// console.log(convertedTemperature);
////const convertedTemperature = convertFahrenheitToCelsius(90);
// display the convertedTempaterue in console.log
//console.log(convertedTemperature);

function DisplayConvertedTemperatures(_listOfTemperatures) {
    //Create an array of the celcius temps

    let fahrenheit = []; // Declaring an empty array this of the type array..
    fahrenheit = _listOfTemperatures

for (let index = 0; index < fahrenheit.length; index++) {
    
    const convertedTemperature = convertFahrenheitToCelsius(fahrenheit[index]);
    //Run the function x amount of time, display the convertedTempaterue in console.log
    console.log(convertedTemperature);
    
}
}

DisplayConvertedTemperatures([212, 90, 72 ,32 , 0, -40]);
DisplayConvertedTemperatures([55, -40]);

//! Create parameters for any value that you want to be dynamic.