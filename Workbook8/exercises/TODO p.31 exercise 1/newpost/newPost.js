'use strict'

window.onload = () => {
  document.getElementById("btnAdd").addEventListener("click", addData)
}



function addData(){


  
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let bodyData = JSON.stringify({
  "userId": document.getElementById('userId').value,
  "title": document.getElementById('title').value,
  "completed": document.querySelector('input[name="completion"]:checked').value
});

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: bodyData,
  redirect: 'follow' //optional. Follow redirects to another URL.
};

fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
  .then(response => response.json())
  .then(result => {
   displayData(result)   })
  .catch(error => console.log('error', error));
}

function displayData(result) {


  if(result.id != "") {
    document.getElementById(`message`).innerHTML = "Data has been added" + result.id

  }


}