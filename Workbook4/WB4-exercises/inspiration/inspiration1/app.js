"use strict";

function init() {
  const myEvent = document.getElementById("showImageBTN");
  myEvent.addEventListener("click", displayImageOnHTML);
}
init();

let oprahWinfrey = {
  name: "Oprah Winfrey",
  age: 68,
  profession: "Media Mogul, Talk Show Host, Philanthropist, Actress, Author",
  accomplishments: [
    "Hosted 'The Oprah Winfrey Show,' one of the highest-rated talk shows in television history",
    "Founded the Oprah Winfrey Network (OWN)",
    "Supporter of various charitable organizations and causes",
    "Author of multiple best-selling books",
  ],
  inspirationalQuote:
    "The biggest adventure you can take is to live the life of your dreams.",
  imageUrl:
    "https://www.amacad.org/sites/default/files/person/headshots/oprah.jpg",
};
//console.log(oprahWinfrey);
// console.log(
//   `${oprahWinfrey.name} ${oprahWinfrey.accomplishments[0]} ${oprahWinfrey.imageUrl}`
// );

function displayPerson(_myPerson) {
  //typicaly we don't want console log inside of function.
  //console.log("Name: " + _myPerson.name)
  return `${_myPerson.name} ${_myPerson.accomplishments[0]}`
}

function displayURL(_myPerson) {
  return `${_myPerson.imageUrl}`
}

let message = "";
message = displayPerson(oprahWinfrey);
//console.log(message);

let url = displayURL(oprahWinfrey);
//console.log(url);


document.getElementById('message').innerHTML = displayPerson(oprahWinfrey);



function displayImageOnHTML() {
  // let myImageURL = showImage(oprahWinfrey);
  // document.getElementById("profileURL").src = myImageURL;
}

// document.getElementById('showImageBTN').innerHTML = displayImageOnHTML;

let myPerson = displayPerson(oprahWinfrey);

document.getElementById("message").innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${myPerson.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${myPerson.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;

  
function displayPerson(_myPerson) {
  return _myPerson;
}