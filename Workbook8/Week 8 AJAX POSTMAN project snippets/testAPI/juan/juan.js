"use strict";

//Creating a Array of City objects in

let cities = [
    {
        name: "Benbrook, TX",
        latitude: 32.6732,
        longitude: -97.4606
    },

    {
        name: "Denver, CO",
        latitude: 39.737411,
        longitude: -104.986288
    },

    {
        name: "Castro Valley, CA",
        latitude: 37.695045,
        longitude: -122.073471
    },

    {
        name: "Santa Rosa, CA",
        latitude: 38.436328,
        longitude: -122.708698
    },
];



// Replace these values with the latitude and longitude of your location
const latitude = 37.7749;
const longitude = -122.4194;

// Construct the URL for the API endpoint
const apiUrl = `https://api.weather.gov/points/${latitude},${longitude}`;




function displayData() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(apiUrl, requestOptions)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
            // Extract the forecast URL from the properties
            var forecastURL = data.properties.forecast;
            newData(forecastURL)
            // Log or use the forecast URL as needed
            console.log("Forecast URL:", forecastURL);

        })
        .catch(error => console.log('error', error));
}




function newData(forecastURL) {
    fetch(forecastURL)
        .then(response => response.json())
        .then(result => {
            var temp = result.properties.periods;
            var temperatura = result.properties.periods[0].temperature;
            var windSpeed = result.properties.periods[0].windSpeed;
            var day = result.properties.periods[0].name;

            console.log("All stuff:", temp)
            console.log("Period:", day)
            console.log("Temperature:", temperatura + " F")
            console.log("Wind Speed:", windSpeed)

        })
        .catch(error => console.log('error', error));
}

// Call the function to display the data
displayData(); 
// newData();