let element = document.getElementById("HarryPotter");
const baseURL = "https://hp-api.onrender.com/api/";

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
        opt.textContent = data[i].name;
        opt.value = data[i].name;
        element.appendChild(opt);
     }
}
fetchData("characters");


// //Try and use this code:
// function displayData(data) {
//     data.forEach(item => {
//         let opt = document.createElement("option");
//         opt.textContent = opt.value = item.email;
//         element.appendChild(opt);
//     });
// }

