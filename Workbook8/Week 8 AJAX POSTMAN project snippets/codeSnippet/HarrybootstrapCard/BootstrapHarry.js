// let element = document.getElementById("HarryPotter");
// const baseURL = "https://hp-api.onrender.com/api/";

// async function fetchData(endpointResource) {
//   if (!endpointResource) {
//     console.error("Endpoint resource is not provided");
//     return;
//   }
//   try {
//     const response = await fetch(baseURL + endpointResource);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     displayData(data);
//   } catch (error) {
//     console.error("There was a problem with the fetch operation:", error);
//   }
// }
// function displayData(data) {
//     for(let i=0; i<data.length; i++) {
//         let opt = document.createElement("option");
//         opt.textContent = data[i].name;
//         opt.value = data[i].name;
//         element.appendChild(opt);
//      }
// }
// fetchData("characters");

// data.forEach((item) => {
//   element.innerHTML +=
//   `
//   <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// `
// }

"use strict";

let element = document.getElementById("emailDropdown");
let theImage = document.getElementById("imageDiv");
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
  // for(let i=0; i<data.length; i++) {
  //     let opt = document.createElement("option");
  //     opt.textContent = data[i].name;
  //     opt.value = data[i].name;
  //     element.appendChild(opt);
  // }

  data.forEach((item) => {
    let opt = document.createElement("option");
    opt.textContent = item.name;
    opt.value = item.name;
    element.appendChild(opt);
  });

  data.forEach((item) => {
    theImage.innerHTML += `
        <div class="card my-3" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="${item.name}">
            <div class="card-body d-flex justify-content-between flex-column">
                <div>
                    <h4 class="card-title">${item.name}</h4>
                    <h5>(${item.alternate_names[0]})</h5>
                </div>
                <div>
                    <h3>Wand:</h3>
                    <p>
                    <strong>Wood:</strong> ${item.wand.wood} <br>
                    <strong>Core:</strong> ${item.wand.core}<br>
                    <strong>Length:</strong> ${item.wand.length}<br>
                    </p>
                </div>
            </div>
        </div>;
`;
  });
}

fetchData("characters");
