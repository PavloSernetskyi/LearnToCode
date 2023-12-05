const baseURL = "https://www.boredapi.com/api/";

async function fetchData(endpointResource) {
  if (!endpointResource) {
    console.error('Endpoint resource is not provided');
    return;
  }
  try {
    const response = await fetch(baseURL + endpointResource);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
function displayData(data) {
  console.log(data);
}

// fetchData("activity/");
fetchData("activity");