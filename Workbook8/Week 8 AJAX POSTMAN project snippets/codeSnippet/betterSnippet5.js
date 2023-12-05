let element = document.getElementById("emailDropdown");
const baseURL = "http://jsonplaceholder.typicode.com/";

async function fetchData(endpointResource) {
  if (!endpointResource) {
    console.error("Endpoint resource is not provided");
    return;
  }
  try {
    const response = await fetch(baseURL + endpointResource);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

function displayData(data) {
    for(let i=0; i<data.length; i++) {
        let opt = document.createElement("option");
        opt.textContent = data[i].email;
        opt.value = data[i].email;
        element.appendChild(opt);
     }
}
fetchData("users");