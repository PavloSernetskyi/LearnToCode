'use strict'

window.onload = init;

function init(){
    let form = document.getElementById("enterUserInfoForm");
    form.addEventListener("submit", postData);
}

function postData(event){
    event.preventDefault();
    let newUserData = {
        id: "",
        name: document.getElementById("fullName").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        company: document.getElementById("companyName").value,
        zipcode: document.getElementById("zipcode").value,
    }

    const baseURL = "https://jsonplaceholder.typicode.com/users";
    fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(newUserData),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then((response) => response.json())
        .then((json) => {
            let message = `Student ${json.id} added`;
            document.getElementById("confirmationMessage").innerHTML = message;
        })
        .catch(err => {
            let confirmationMessage = document.getElementById("confirmationMessage");
            confirmationMessage.innerHTML = "Unexpected error."
        })
        

}