// Replace these values with the latitude and longitude of your location
const latitude = 37.7749;
const longitude = -122.4194;

// Construct the URL for the API endpoint
const apiUrl = `https://api.weather.gov/points/${latitude},${longitude}`;

// Fetch data from the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Extract the forecast URL from the response
    const forecastUrl = data.properties.forecast;

    // Fetch the forecast data
    return fetch(forecastUrl);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Extract the temperature from the forecast data
    const temperature = data.properties.periods[0].temperature;

    // Log the temperature
    // console.log(`Temperature: ${temperature}°F`);

    let message = `The temperature is: ${temperature} F`;


    document.getElementById("temp").innerHTML = message;

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
